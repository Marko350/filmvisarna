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

  // Run based on id in route on movie details page on load
  const getMovieById = async (id) => {
    let movie = await fetch(`/api/v1/movies/${id}`);
    movie = await movie.json();
    console.log(movie);
  }

  useEffect(() => {
    getAllMovies();
    getMovieById('60acacd346075c18aeee45b4');
  }, [])

  const values = {
    getAllMovies,
    allMovies,
    getMovieById,
  }

  return ( 
    <MovieContext.Provider value={ values }>
      { props.children }
    </MovieContext.Provider>
   );
}
 
export default MovieProvider;