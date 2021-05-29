import TicketPicture from "../assets/ticket-bg.png";
import {
  container,
  movieInfo,
  ticketInfo,
  imageContainer,
} from "../css/Ticket.module.css";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Ticket = () => {
  const { getMovieById } = useContext(MovieContext);

  return (
    <div className={container}>
      <h2>Din biljett</h2>
      <div className={ticketInfo}>
        <div className={imageContainer}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
            alt="Poster"
          />
        </div>
        <div className={movieInfo}>
          <span>Star Wars</span>
          <span>03/05/2022 00:00</span>
          <span>Standard: 2</span>
          <span>Pensionär: 1</span>
          <span>Barn: 1</span>
          <span>Totalt pris: 250kr</span>
        </div>
      </div>
      <img src={TicketPicture} alt="Ticket" />
    </div>
  );
};

export default Ticket;
