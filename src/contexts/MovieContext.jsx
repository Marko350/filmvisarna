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

  // Run based on id in route on movie details-page on load
  const getMovieById = async (movieId) => {
    let movie = await fetch(`/api/v1/movies/${movieId}`);
    movie = await movie.json();
    console.log(movie);
    return movie;
  }

  // Use on booking-page to get the correct showing with info about booked seats etc
  // * Note: Might want to remove array from model since we will only have one screen and one movie here
  const getShowingById = async (showingId) => {
    let showing = await fetch (`/api/v1/showings/${showingId}`);
    showing = await showing.json();
    console.log(showing);
    return showing;
  }

  useEffect(() => {
    getAllMovies();
    getMovieById('60acacd346075c18aeee45b4');
    getShowingById('60acc75a2e0da01dfcbd1854');
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