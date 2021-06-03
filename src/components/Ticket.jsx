import { useContext } from "react";
import TicketPicture from "../assets/ticket-bg.png";
import { MovieContext } from "../contexts/MovieContext";
import {
  container,
  movieInfo,
  imageContainer,
  ticketTypes,
} from "../css/Ticket.module.css";
import style from "../css/Ticket.module.css";

const Ticket = ({ showing }) => {
  const { tickets } = useContext(MovieContext);

  const renderNumOfTickets = () => {
    let numOfTickets = tickets.standard + tickets.senior + tickets.child;
    return (
      <div className={ticketTypes}>
        <p>Antal biljetter: {numOfTickets}</p>
      </div>
    );
  };

  // const renderTicketTypes = () => {
  //   if (tickets.standard > 0 || tickets.senior > 0 || tickets.child > 0) {
  //     return (
  //       <div className={`${ticketTypes} ${style.bigScreen}`}>
  //         { tickets.standard > 0 && <p>Standard: {tickets.standard}</p> }
  //         { tickets.senior > 0 && <p>Pensionär: {tickets.senior}</p> }
  //         { tickets.child > 0 && <p>Barn: {tickets.child}</p> }  
  //       </div>
  //     )  
  //   } else {
  //     return <div className={ticketTypes}>Inga biljetter valda</div>
  //   }
  // }

  return (
    <div className={`${container} ${style.ticketWrapper}`}>
      <h3>Din biljett</h3>
      <div className={style.ticketInfoWrapper}>
        <div className={style.ticketInfo}>
          <div className={imageContainer}>
            <img className={style.poster}
              src={showing.movieId[0].poster}
              alt="Poster"/>
          </div>
          <div className={style.verticalLine}></div>
          <div className={movieInfo}>
            <span className={style.ticketTitle}>
              {showing.movieId[0].title}
            </span>
            <span className={style.ticketTime}>
              {showing.date} {showing.time}
            </span>
            <hr />
            {renderNumOfTickets()}
            {/* { renderTicketTypes() } */}
            <div className={style.ticketPrice}>
              {/* <hr /> */}
              <span className={style.totalPrice}>
                Totalt pris: {tickets.totalPrice} kr
              </span>
            </div>
          </div>
        </div>
        <img src={TicketPicture} className={style.bgImg} alt="Ticket" />
      </div>
    </div>
  );
};

export default Ticket;
