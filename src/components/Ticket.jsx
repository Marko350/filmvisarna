import { useContext } from 'react';
import TicketPicture from "../assets/ticket-bg.png";
import { MovieContext } from '../contexts/MovieContext';
import {
  container,
  movieInfo,
  ticketInfo,
  imageContainer,
} from "../css/Ticket.module.css";

const Ticket = ({ showing }) => {
  const { tickets } = useContext(MovieContext);
  console.log('showing in ticket', showing);

  return (
    <div className={container}>
      <h2>Din biljett</h2>
      <div className={ticketInfo}>
        <div className={imageContainer}>
          <img
            // src="https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
            src={showing.movieId[0].poster}
            alt="Poster"
          />
        </div>
        <div className={movieInfo}>
          <span>{showing.movieId[0].title}</span>
          <span>{showing.date} - {showing.time}</span>
          { tickets.standard > 0 && <span>Standard: {tickets.standard}</span> }
          { tickets.senior > 0 && <span>Pensionär: {tickets.senior}</span> }
          { tickets.child > 0 && <span>Barn: {tickets.child}</span> }
          <span>Totalt pris: {tickets.totalPrice} kr</span>
        </div>
      </div>
      <img src={TicketPicture} alt="Ticket" />
    </div>
  );
};

export default Ticket;
