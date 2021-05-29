import { useState, useEffect, useContext } from "react";
import { container } from "../css/Tickets.module.css";
import Ticket from "../assets/ticket.png";
import {
  tickets,
  barnTicket,
  counter,
  ticketNumber,
} from "../css/Tickets.module.css";
import { MovieContext } from "../contexts/MovieContext";

const Tickets = () => {
  const { setTickets } = useContext(MovieContext);
  const [standardTicket, setStandardTicket] = useState(0);
  const [pensionerTicket, setPensionerTicket] = useState(0);
  const [childTicket, setChildTicket] = useState(0);

  useEffect(() => {
    setTickets({
      standard: standardTicket,
      senior: pensionerTicket,
      child: childTicket
    })
  }, [standardTicket, pensionerTicket, childTicket])

  return (
    <div className={container}>
      <h2>Välj antal biljetter</h2>
      <div className={tickets}>
        <p>Standard</p>
        <img src={Ticket} alt="Ticket" />
        <div className={counter}>
          <i
            onClick={() => setStandardTicket(standardTicket - 1)}
            className="fas fa-minus-circle"
          ></i>
          <div className={ticketNumber}>
            <span>{standardTicket}</span>
          </div>
          <i
            onClick={() => setStandardTicket(standardTicket + 1)}
            className="fas fa-plus-circle"
          ></i>
        </div>
      </div>
      <div className={tickets}>
        <p>Pensionär</p>
        <img src={Ticket} alt="Ticket" />
        <div className={counter}>
          <i
            onClick={() => setPensionerTicket(pensionerTicket - 1)}
            className="fas fa-minus-circle"
          ></i>
          <div className={ticketNumber}>
            <span>{pensionerTicket}</span>
          </div>
          <i
            onClick={() => setPensionerTicket(pensionerTicket + 1)}
            className="fas fa-plus-circle"
          ></i>
        </div>
      </div>
      <div className={barnTicket}>
        <p>Barn</p>
        <img src={Ticket} alt="Ticket" />
        <div className={counter}>
          <i
            onClick={() => setChildTicket(childTicket - 1)}
            className="fas fa-minus-circle"
          ></i>
          <div className={ticketNumber}>
            <span>{childTicket}</span>
          </div>
          <i
            onClick={() => setChildTicket(childTicket + 1)}
            className="fas fa-plus-circle"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
