import style from '../css/SeatMap.module.css';

const SeatMap = () => {
  let rows = ['a', 'b', 'c', 'd'];
  let seatsPerRow = 8;
  let bookedSeats = ['a1', 'a2', 'a3', 'b2', 'b3', 'c4', 'c5'];

  let seatsContent = 'Laddar...';
  if (rows) {
    let allSeatsHtml = rows.map((row, index) => {
      let rowSeats = '';
      for (let i = 1; i < seatsPerRow; i++) {
        rowSeats += `<span data-seat=${row}${i}>${i}</span>`
      }
      return `<div><h3>${row}</h3>${rowSeats}</div>`
    })
    seatsContent = <h3>Hej</h3>;
  }

  return ( 
    <div className={style.seatMapWrapper}> 
      <div className={style.screenIndicator}>filmduken</div>
      <div className={style.seatsWrapper}>
        {seatsContent}
      </div>
    </div>
   );
}
 
export default SeatMap;