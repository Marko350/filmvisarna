import { useContext, useEffect, useState } from 'react';
import Ticket from "../components/Ticket";
import Tickets from "../components/Tickets";
import Btn from "../assets/buttonImg/btn-small.png";
import { container, btn, btnContainer, bookingWrapper } from "../css/Booking.module.css";
import SeatMap from "../components/SeatMap";
import { MovieContext } from '../contexts/MovieContext';

const Booking = () => {
  const { getShowingById, chosenSeats } = useContext(MovieContext);
  const [showing, setShowing] = useState(null);

  const getShowing = async () => {
    let show = await getShowingById('60acc70f2e0da01dfcbd1853');
    setShowing(show);
  }

  useEffect(() => {
    getShowing();
  }, []);

  const handleBookingBtn = () => {
    console.log(chosenSeats);
    // handle sending booking to back-end
  }

  if (showing) {
    console.log('got showing', showing)
  }

  return (
    <div className={`container ${bookingWrapper}`}>
      { showing && 
        <div>
          <Tickets />
          <SeatMap showing={showing}/>
          <Ticket />
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