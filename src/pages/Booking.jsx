import { useContext, useEffect, useState } from 'react';
import Ticket from "../components/Ticket";
import Tickets from "../components/Tickets";
import Btn from "../assets/buttonImg/btn-small.png";
import { container, btn, btnContainer, bookingWrapper } from "../css/Booking.module.css";
import SeatMap from "../components/SeatMap";
import { MovieContext } from '../contexts/MovieContext';
import { useHistory } from "react-router-dom";

const Booking = () => {
  const { getShowingById, chosenSeats, tickets, addSeats, setBookedTicket } = useContext(MovieContext);
  const [showing, setShowing] = useState(null);
  const history = useHistory()
  const getShowing = async () => {
    let show = await getShowingById('60b4db5df09c565b4437b5fb');
    setShowing(show);
  }

  useEffect(() => {
    getShowing();
  }, []);

  const handleBookingBtn = () => {
    // Creating ticket-object
    // Will send ticket to back-end later

    // Check if there are any seats in the chosenSeats-array
    if (chosenSeats.length) {
      const ticketObj = {
        showingId: showing._id,
        seats: chosenSeats,
        date: showing.date,
        time: showing.time,
        ticketTypes: tickets,
        movieTitle: showing.movieId[0].title,
        poster: showing.movieId[0].poster,
      }
      console.log('Ticket:', ticketObj);
      localStorage.setItem("myItem", JSON.stringify(ticketObj))
      setBookedTicket(ticketObj)
      addSeats(showing._id, chosenSeats);
      history.push('/confirmation')
    } else {
      console.log('Need to choose your seats');
    }
  }

  return (
    <div className={`container ${bookingWrapper}`}>
      { showing && 
        <div>
          <Tickets showing={showing}/>
          <SeatMap showing={showing}/>
          <Ticket showing={showing}/>
          <div
            onClick={handleBookingBtn}
            className={btnContainer}
          >
          <div className={btn}>
            <p>Boka</p>
            <img src={Btn} alt="Button" />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Booking;