import { useContext, useEffect, useState } from "react";
import Ticket from "../components/Ticket";
import Tickets from "../components/Tickets";
import Btn from "../assets/buttonImg/btn-medium.png";
import { btn, btnContainer, bookingWrapper } from "../css/Booking.module.css";
import style from "../css/Booking.module.css";
import SeatMap from "../components/SeatMap";
import { MovieContext } from "../contexts/MovieContext";
import { useHistory } from "react-router-dom";

const Booking = (props) => {
  const showingId = props.match.params.showingId;

  const { getShowingById, chosenSeats, tickets, addSeats, setBookedTicket } =
    useContext(MovieContext);
  const [showing, setShowing] = useState(null);
  const [numOfSeats, setNumOfSeats] = useState(0);

  const history = useHistory();
  const getShowing = async () => {
    let show = await getShowingById(showingId);
    setShowing(show);
  };

  useEffect(() => {
    getShowing();
  }, []);

  useEffect(() => {
    setNumOfSeats(tickets.standard + tickets.senior + tickets.child);
    // eslint-disable-next-line   
  }, [tickets])

  const handleBookingBtn = () => {
    // Creating ticket-object
    // Will send ticket to back-end later

    // Check if there are any seats in the chosenSeats-array
    if (chosenSeats.length) {
      const ticketObj = {
        showingId: showing._id,
        seats: chosenSeats,
        date: showing.date,
        time: showing.time,
        ticketTypes: tickets,
        movieTitle: showing.movieId[0].title,
        poster: showing.movieId[0].poster,
      };
      localStorage.setItem("myItem", JSON.stringify(ticketObj));
      setBookedTicket(ticketObj);
      addSeats(showing._id, chosenSeats);
      history.push('/confirmation')
    } else {
      return;
    }
  };

  let email = "lorem.andersson@gmail.com";

  return (
    <div className={`container ${bookingWrapper}`}>
      {showing && (
        <div>
          <div className={style.infoHeader}>
            <h1>Boka biljetter</h1>
            <div className={style.infoTitle}>
              <p>{showing.movieId[0].title}</p>
              <p>
                {showing.date} {showing.time}
              </p>
            </div>
          </div>
          <hr className={style.hrGray} />
          <div className={style.ticketsHeader}>
            <h2>Välj biljetter</h2>
            <div className={style.seatMapNumber}>
              <span>Antal:</span>
              <span>{numOfSeats}</span>
            </div>
          </div>
          <div className={style.ticketsWrapper}>
            <div className={style.chooseTicketsWrapper}>
              <Tickets showing={showing} />
              <div className={`${style.yourSeatsWrapper} ${style.hideSmall}`}>
                <h4>Valda platser</h4>
                <div className={style.chosenSeatsDisplay}>
                  {chosenSeats.length ? (
                    chosenSeats.map((seat, i) => (
                      <span
                        className={`${style.yourSeats} ${style.uppercase}`}
                        key={i}
                      >
                        {seat}
                      </span>
                    ))
                  ) : (
                    <span className={style.yourSeats}>Inga platser valda</span>
                  )}
                </div>
              </div>
            </div>
            <SeatMap showing={showing} />
            <div className={`${style.yourSeatsWrapper} ${style.showSmall}`}>
              <h4>Valda platser</h4>
              <div className={style.chosenSeatsDisplay}>
                {chosenSeats.length ? (
                  chosenSeats.map((seat, i) => (
                    <span
                      className={`${style.yourSeats} ${style.uppercase}`}
                      key={i}
                    >
                      {seat}
                    </span>
                  ))
                ) : (
                  <span className={style.yourSeats}>Inga platser valda</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2>Sammanfattning</h2>
            <hr className={style.hrGray} />
            <div className={style.overviewWrapper}>
              <Ticket showing={showing} />
              <div className={style.yourInfoWrapper}>
                <h3>Dina uppgifter</h3>
                <div className={style.yourInfo}>
                  <h4>E-post:</h4>
                  <p>
                    {email.length > 25 ? `${email.slice(0, 25)}...` : email}
                  </p>
                  <h4>Telefonnummer:</h4>
                  <p>070-32 123 412</p>
                </div>
              </div>
            </div>
          </div>
          <div onClick={handleBookingBtn} className={btnContainer}>
            <div className="mainBtn btnMedium">
              <p className="btnLabel">Boka biljetter</p>
              <img src={Btn} alt="button test page"></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
