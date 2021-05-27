import { container } from "../css/Tickets.module.css";
import Ticket from "../assets/ticket.png";
import { tickets, barnTicket } from "../css/Tickets.module.css";

const Tickets = () => {
  return (
    <div className={container}>
      <h1>Välj antal biljetter</h1>
      <div className={tickets}>
        <p>Standard</p>
        <img src={Ticket} alt="Ticket picture" />
        <i class="fas fa-minus-circle"></i>
      </div>
      <div className={tickets}>
        <p>Pensionär</p>
        <img src={Ticket} alt="Ticket picture" />
      </div>
      <div className={barnTicket}>
        <p>Barn</p>
        <img src={Ticket} alt="Ticket picture" />
      </div>
    </div>
  );
};

export default Tickets;
