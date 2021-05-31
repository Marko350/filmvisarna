import { useContext, useEffect, useState } from 'react';
import Ticket from "../components/Ticket";
import Tickets from "../components/Tickets";
import Btn from "../assets/buttonImg/btn-small.png";
import { container, btn, btnContainer, bookingWrapper } from "../css/Booking.module.css";
import SeatMap from "../components/SeatMap";
import { MovieContext } from '../contexts/MovieContext';

const Booking = (props) => {

  const showingId = props.match.params.showingId;

  const { getShowingById, chosenSeats, tickets, addSeats } = useContext(MovieContext);
  const [showing, setShowing] = useState(null);

  const getShowing = async () => {
    let show = await getShowingById(showingId);
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
      addSeats(showing._id, chosenSeats);
    } else {
      console.log('Need to choose your seats');
    }
  }

  if (showing) {
    console.log('got showing', showing)
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