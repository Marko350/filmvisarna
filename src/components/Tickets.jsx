import { useState, useEffect, useContext } from "react";
import { container } from "../css/Tickets.module.css";
import Ticket from "../assets/ticket-type-bg.png";
import {
  tickets,
  barnTicket,
  counter,
  ticketNumber,
} from "../css/Tickets.module.css";
import style from "../css/Tickets.module.css";
import { MovieContext } from "../contexts/MovieContext";

const Tickets = ({ showing }) => {
  const { setTickets, setChosenSeats } = useContext(MovieContext);
  const [standardTicket, setStandardTicket] = useState(0);
  const [pensionerTicket, setPensionerTicket] = useState(0);
  const [childTicket, setChildTicket] = useState(0);

  const seatsPerRow = showing.screenId[0].seatsPerRow;

  useEffect(() => {
    let price = showing.movieId[0].price
    let totalPrice = (price * standardTicket) + ((price * .8) * pensionerTicket) + ((price * .7) * childTicket);
    setTickets({
      standard: standardTicket,
      senior: pensionerTicket,
      child: childTicket,
      totalPrice,
    })
    setChosenSeats([]);
    // eslint-disable-next-line
  }, [standardTicket, pensionerTicket, childTicket])

  const addSeatFunc = (state, setFunc) => {
    if (standardTicket + pensionerTicket + childTicket >= seatsPerRow) return;
    setFunc(state + 1);
  }

  const minusSeatFunc = (state, setState) => { 
    if (state === 0) return;     
    setState(state - 1);   
  };

  return (
    <div className={container}>
      {/* <h2>Välj antal biljetter</h2> */}
      <div className={tickets}>
        <div className={style.ticketType}>
          <p>Standard</p>
          <img src={Ticket} alt="Ticket" />
        </div>
        <div className={counter}>
          <i
            onClick={() => minusSeatFunc(standardTicket, setStandardTicket)}
            className="fas fa-minus-circle"
          ></i>
          <div className={ticketNumber}>
            <span>{standardTicket}</span>
          </div>
          <i
            onClick={() => addSeatFunc(standardTicket, setStandardTicket)}
            className="fas fa-plus-circle"
          ></i>
        </div>
      </div>
      <div className={tickets}>
        <div className={style.ticketType}>
          <p>Pensionär</p>
          <img src={Ticket} alt="Ticket" />
        </div>
        <div className={counter}>
          <i
            onClick={() => minusSeatFunc(pensionerTicket, setPensionerTicket)}
            className="fas fa-minus-circle"
          ></i>
          <div className={ticketNumber}>
            <span>{pensionerTicket}</span>
          </div>
          <i
            onClick={() => addSeatFunc(pensionerTicket, setPensionerTicket)}
            className="fas fa-plus-circle"
          ></i>
        </div>
      </div>
      <div className={tickets}>
        <div className={style.ticketType}>
          <p>Barn</p>
          <img src={Ticket} alt="Ticket" />
        </div>
        <div className={counter}>
          <i
            onClick={() => minusSeatFunc(childTicket, setChildTicket)}
            className="fas fa-minus-circle"
          ></i>
          <div className={ticketNumber}>
            <span>{childTicket}</span>
          </div>
          <i
            onClick={() => addSeatFunc(childTicket, setChildTicket)}
            className="fas fa-plus-circle"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
