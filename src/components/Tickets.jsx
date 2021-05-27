import { useState } from "react";
import { container } from "../css/Tickets.module.css";
import Ticket from "../assets/ticket.png";
import { tickets, barnTicket } from "../css/Tickets.module.css";

const Tickets = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className={container}>
      <h1>Välj antal biljetter</h1>
      <div className={tickets}>
        <p>Standard</p>
        <img src={Ticket} alt="Ticket picture" />
        <div>
        <i onClick={} class="fas fa-minus-circle"></i>
        <span>{number}</span>
        <i class="fas fa-plus-circle"></i>
        </div>
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
