import { container } from "../css/Tickets.module.css";
import Ticket from "../assets/ticket.png";

const Tickets = () => {
  return (
    <div className={container}>
      <h1>tickets</h1>
      <img src={Ticket} alt="Ticket picture" />
    </div>
  );
};

export default Tickets;
