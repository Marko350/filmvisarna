import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);

  const getAllMovies = async () => {
    let movies = await fetch('/api/v1/movies');
    movies = await movies.json();
    console.log(movies);
    setAllMovies(movies);
  }

  useEffect(() => {
    getAllMovies();
  }, [])

  const values = {

  }

  return ( 
    <MovieContext.Provider value={ values }>
      { props.children }
    </MovieContext.Provider>
   );
}
 
export default MovieProvider;