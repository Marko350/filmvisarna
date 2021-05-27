import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);
  const [todaysShowings, setTodaysShowings] = useState(null);

  useEffect(() => {
  // console.log("Dagens visningar:", todaysShowings)
  }, [todaysShowings])

  const getAllMovies = async () => {
    let movies = await fetch('/api/v1/movies');
    movies = await movies.json();
    // console.log(movies);
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
  const getShowingById = async (showingId) => {
    let showing = await fetch (`/api/v1/showings/${showingId}`);
    showing = await showing.json();
    // console.log(showing);
    return showing;
  }

  // Use on movie details-page to get showings for specific movie
  const getShowingsByMovieAndDate = async (movieId, date) => {
    // Will set date to current date if date is not sent into function
    if (!date) {
      date = new Date().toISOString().slice(0, 10);
    }
    // Send down querys in route to back-end
    let showings = await fetch(`/api/v1/showings/movie-date?movieId=${movieId}&date=${date}`);
    showings = await showings.json();
    // console.log('Showings by movie and date:', showings);
    return showings;
  }

  // Use for schedule on start-page
  const getShowingsByCurrentDate = async () => {
    let showings = await fetch('/api/v1/showings/todaysShowings');
    showings = await showings.json();
    // console.log('All showings today:', showings);
    setTodaysShowings(showings)
    removeDuplicates(showings, "time");
  }

  //for filtering out showing time duplicates
  function removeDuplicates(showings, time) {
    let uniq = [];
    // showings.filter(showing => !uniq.time && uniq.push(showing.time))
    uniq = showings
       .map(showing => showing[time])
       .map((showing, i, final) => final.indexOf(showing) === i && i)
       .filter(showing => showings[showing]).map(showing => showings[showing]);

    console.log("This is new array uniq:", uniq);

    let newArr = [];
    uniq.forEach((showing) => {
      let tempArr = showings.filter(movie => movie.time === showing.time);
      newArr.push([showing, tempArr]);
      console.log("this is new arr", newArr);
    })
  }

  useEffect(() => {
    getAllMovies();
    getMovieById('60acacd346075c18aeee45b4');
    getShowingById('60acc75a2e0da01dfcbd1854');
    getShowingsByMovieAndDate('60acacd346075c18aeee45b8', '2021-06-13')
    getShowingsByCurrentDate();
  }, [])

  const values = {
    getAllMovies,
    allMovies,
    getMovieById,
    todaysShowings
  }

  return (
    <MovieContext.Provider value={ values }>
      { props.children }
    </MovieContext.Provider>
   );
}

export default MovieProvider;