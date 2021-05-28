import { useState } from 'react';
import style from '../css/SeatMap.module.css';

const SeatMap = () => {
  const [chosenSeats, setChosenSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(['a1', 'a2', 'a3', 'b2', 'b3', 'c4', 'c5'])
  let rows = ['a', 'b', 'c', 'd'];
  let seatsPerRow = 10;


  const handleSeatClick = (e) => {
    let seat = e.target.getAttribute('data-seat');
    setChosenSeats([...chosenSeats, seat]);
    console.log(seat)
  }

  let seatsContent = 'Laddar...';
  if (rows) {
    let allSeatsHtml = rows.map((row, index) => {
      let rowSeats = [];
      for (let i = 1; i <= seatsPerRow; i++) {
        let seatClass = 
          bookedSeats.includes(`${row}${i}`) && style.booked || chosenSeats.includes(`${row}${i}`) && style.chosen;
          
        rowSeats.push
          (<div key={i} className={`${style.seat} ${seatClass}`} onClick={handleSeatClick} data-seat={`${row}${i}`}>{i}</div>)
      }
      return <div className={style.seatRow} key={index}>{rowSeats}<div className={style.rowName}>{row}</div></div>
    })
    seatsContent = allSeatsHtml;
  }

  return ( 
    <div className={style.seatMapWrapper}> 
      <div className={style.seatMap}>
        <div className={style.screenIndicator}>filmduken</div>
        <div className={style.seatsWrapper}>
          {seatsContent}
        </div>
        <div>Valda platser: {chosenSeats.map((seat, i) => 
          <span className={style.yourSeats} key={i}>{seat}</span>)}
        </div>
      </div>
    </div>
   );
}
 
export default SeatMap;