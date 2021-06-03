import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import style from "../css/SeatMap.module.css";

const SeatMap = ({ showing }) => {
  const { chosenSeats, setChosenSeats, tickets } = useContext(MovieContext);
  const [numOfSeats, setNumOfSeats] = useState(0);
  const [hover, setHover] = useState([]);
  const bookedSeats = showing.bookedSeats;
  const rows = showing.screenId[0].rows;
  const seatsPerRow = showing.screenId[0].seatsPerRow;

  useEffect(() => {
    setNumOfSeats(tickets.standard + tickets.senior + tickets.child)
    // eslint-disable-next-line
  }, [tickets]);

  const handleSeatClick = () => {
    // Check if any seat from hover-array is in bookedSeats-array
    // Add seats to chosenSeats-array in context
    let ok = true;
    hover.forEach((seat) => {
      if (bookedSeats.includes(seat)) ok = false;
    });

    ok && setChosenSeats(hover);
  };

  const handleMouseEnter = (e) => {
    // Pick out seat that mouse is hovering over
    // Pick out start seat (based on how many seats from Tickets.jsx)
    // Push all hovered seats into hover-array
    let hoverRow = e.target.getAttribute("data-seat")[0];
    let hoverSeat = e.target.getAttribute("data-seat").slice(1);
    let startSeat = Number(hoverSeat) - Math.floor(numOfSeats / 2);
    if (startSeat <= 0) startSeat = 1;
    if (startSeat + numOfSeats > seatsPerRow)
      startSeat = seatsPerRow + 1 - numOfSeats;
    let hoverArray = [];
    for (let i = 0; i < numOfSeats; i++) {
      hoverArray.push(hoverRow + (startSeat + i));
    }
    setHover(hoverArray);
  };

  const handleMouseLeave = () => {
    // Set hover-array to empty array on mouse leave
    setHover([]);
  };

  let seatsContent = "Laddar...";
  if (rows) {
    let allSeatsHtml = rows.map((row, index) => {
      let rowSeats = [];
      for (let i = 1; i <= seatsPerRow; i++) {
        // Render out seat with css based on booked / chosen / hover
        let seatClass =
          (bookedSeats.includes(`${row}${i}`) && style.booked) ||
          (chosenSeats.includes(`${row}${i}`) && style.chosen);

        // Add name of seat to data-seat attribute ('a1', 'a2', etc)
        rowSeats.push(
          <div
            key={i}
            className={`${style.seat} ${seatClass} ${
              hover.includes(`${row}${i}`) && style.hoverSeat
            }`}
            onClick={handleSeatClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-seat={`${row}${i}`}
          >
            <span className={style.seatNrCss}>{i}</span>
          </div>
        );
      }
      return (
        <div className={style.seatRow} key={index}>
          {rowSeats}
          <div className={style.rowName}>{row}</div>
        </div>
      );
    });
    seatsContent = allSeatsHtml;
  }

  return (
    <div className={style.seatMapWrapper}>
      {/* <div className={style.seatMapHeader}>
        <h2>Välj platser</h2>
        <div className={style.seatMapNumber}><span>Antal:</span><span>{numOfSeats}</span></div>
      </div> */}
      <div className={style.seatMap}>
        <div className={style.screenIndicator}>
          <div className={style.screenLine}></div>
          <h4 className={style.screenHeading}>Filmduken</h4>
        </div>
        <div className={style.seatsWrapper}>{seatsContent}</div>
      </div>
    </div>
  );
};

export default SeatMap;
