import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import style from '../css/Start.module.css';
import button from '../assets/buttonImg/btn-small.png';
import SeatMap from '../components/SeatMap';

const Start = () => {
  const { allMovies } = useContext(MovieContext);

  let content = 'Laddar...';
  if (allMovies) {
    content = 
      <div>
        {allMovies.map(movie => (
          <div key={movie._id}>
            {movie.title} - <span>{movie._id}</span>
          </div>
        ))}
      </div>
  }

  return ( 
    <div className={`container ${style.startWrapper}`}>
      <h1 className={style.startHeader}>Heading</h1>
      <div className="mainBtn btnSmall">
        <h4 className="btnLabel">Logga in</h4>
        <img src={button} alt="button test page"></img>
      </div>
      <SeatMap />
      { content }
    </div>
   );
}
 
export default Start;