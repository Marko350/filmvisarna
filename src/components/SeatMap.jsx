import { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import style from '../css/SeatMap.module.css';

const SeatMap = () => {
  const { chosenSeats, setChosenSeats, tickets } = useContext(MovieContext);
  const [bookedSeats, setBookedSeats] = useState(['a1', 'a2', 'a3', 'b2', 'b3', 'c4', 'c5']);
  const [hover, setHover] = useState('');
  let rows = ['a', 'b', 'c', 'd', 'e'];
  let seatsPerRow = 10;
  const [numOfSeats, setNumOfSeats] = useState(0);

  useEffect(() => {
    setNumOfSeats(tickets.standard + tickets.senior + tickets.child)
  }, [tickets]);

  const handleSeatClick = (e) => {
    let seat = e.target.getAttribute('data-seat');
    let ok = true;
    hover.forEach(seat => {
      if (bookedSeats.includes(seat)) ok = false;
    })
    console.log(hover);
    ok && setChosenSeats(hover);
  }

  const handleMouseEnter = (e) => {
    let hoverRow = e.target.getAttribute('data-seat')[0];
    let hoverSeat = e.target.getAttribute('data-seat').slice(1);
    let startSeat = Number(hoverSeat) - Math.floor(numOfSeats / 2);
    if (startSeat <= 0) startSeat = 1;
    if ((startSeat + numOfSeats) > 10) startSeat = 11 - numOfSeats; 
    let hoverArray = [];
    for (let i = 0; i < numOfSeats; i++) {
      hoverArray.push(hoverRow + (startSeat + i))
    }
    setHover(hoverArray);
  }

  const handleMouseLeave = () => {
    setHover('');
  }

  let seatsContent = 'Laddar...';
  if (rows) {
    let allSeatsHtml = rows.map((row, index) => {
      let rowSeats = [];
      for (let i = 1; i <= seatsPerRow; i++) {
        let seatClass = 
          bookedSeats.includes(`${row}${i}`) && style.booked || chosenSeats.includes(`${row}${i}`) && style.chosen;
          
        rowSeats.push
          (<div key={i} className={`${style.seat} ${seatClass} ${hover.includes(`${row}${i}`) && style.hoverSeat}`} onClick={handleSeatClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-seat={`${row}${i}`}>
            <span className={style.seatNrCss}>{i}</span>
          </div>)
      }
      return <div className={style.seatRow} key={index}>{rowSeats}<div className={style.rowName}>{row}</div></div>
    })
    seatsContent = allSeatsHtml;
  }

  return ( 
    <div className={style.seatMapWrapper}>
      <h2>Välj platser: {numOfSeats}</h2>
      <div className={style.seatMap}>
        <div className={style.screenIndicator}>
          <div className={style.screenLine}></div>
          <h4 className={style.screenHeading}>Filmduken</h4>
        </div>
        <div className={style.seatsWrapper}>
          {seatsContent}
        </div>
        <div className={style.seatsDiv}>
          <div>Valda platser:</div>
          {chosenSeats.map((seat, i) => <span className={style.yourSeats} key={i}>{seat}</span>)}
        </div>
      </div>
    </div>
   );
}
 
export default SeatMap;