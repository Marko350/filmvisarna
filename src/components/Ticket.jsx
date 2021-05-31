import { useContext } from 'react';
import TicketPicture from "../assets/ticket-bg.png";
import { MovieContext } from '../contexts/MovieContext';
import {
  container,
  movieInfo,
  ticketInfo,
  imageContainer,
  ticketTypes
} from "../css/Ticket.module.css";

const Ticket = ({ showing }) => {
  const { tickets } = useContext(MovieContext);
  console.log('showing in ticket', showing);

  const renderTicketTypes = () => {
    if (tickets.standard > 0 || tickets.senior > 0 || tickets.child > 0) {
      return (
        <div className={ticketTypes}>
          { tickets.standard > 0 && <p>Standard: {tickets.standard}</p> }
          { tickets.senior > 0 && <p>Pensionär: {tickets.senior}</p> }
          { tickets.child > 0 && <p>Barn: {tickets.child}</p> }  
        </div>
      )  
    } else {
      return <div className={ticketTypes}>Inga biljetter valda</div>
    }
  }

  return (
    <div className={container}>
      <h2>Din biljett</h2>
      <div className={ticketInfo}>
        <div className={imageContainer}>
          <img
            src={showing.movieId[0].poster}
            alt="Poster"
          />
        </div>
        <div className={movieInfo}>
          <span>{showing.movieId[0].title}</span>
          <span>{showing.date} - {showing.time}</span>
          <hr />
          { renderTicketTypes() }
          <hr />
          <span>Totalt pris: {tickets.totalPrice} kr</span> 
        </div>
      </div>
      <img src={TicketPicture} alt="Ticket" />
    </div>
  );
};

export default Ticket;
