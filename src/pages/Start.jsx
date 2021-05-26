import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import style from '../css/Start.module.css';
import button from '../assets/buttonImg/btn-small.png';

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
      <p>Hej</p>
      <div className={style.mainButton}>
        <h4 className={style.btnLabel}>Logga in</h4>
        <img src={button}></img>
      </div>
      { content }
    </div>
   );
}
 
export default Start;