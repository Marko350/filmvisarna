import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import style from '../css/Start.module.css';

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
      { content }
    </div>
   );
}
 
export default Start;