import Ticket from "../components/Ticket";
import Tickets from "../components/Tickets";
import Btn from "../assets/buttonImg/btn-small.png";
import { container, btn, btnContainer } from "../css/Booking.module.css";
import SeatMap from "../components/SeatMap";
const Booking = () => {
  return (
    <div className={container}>
      <Tickets />
      <SeatMap />
      <Ticket />
      <div
        onClick={() => alert("You clicked on a button")}
        className={btnContainer}
      >
        <div className={btn}>
          <p>Boka</p>
          <img src={Btn} alt="Button" />
        </div>
      </div>
    </div>
  );
};

export default Booking;