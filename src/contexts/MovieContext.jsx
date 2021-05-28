import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);
  const [movieById, setMovieById] = useState(null);
  const [todaysShowings, setTodaysShowings] = useState(null);
  const [todaysSchema, setTodaysSchema] = useState(null);
  const [todaysPosters, setTodaysPoster] = useState(null);

  useEffect(() => {
    console.log("this is today:", todaysSchema);
  }, [todaysSchema])

  const getAllMovies = async () => {
    let movies = await fetch('/api/v1/movies');
    movies = await movies.json();
    console.log(movies);
    setAllMovies(movies);
  }

  // Run based on id in route on movie details-page on load
  const getMovieById = async (movieId) => {
    console.log("MovieId: ", movieId);
    let movie = await fetch(`/api/v1/movies/${movieId}`);
    movie = await movie.json();
    console.log(movie);
    setMovieById(movie);
    //return movie;
  }

  // Use on booking-page to get the correct showing with info about booked seats etc
  const getShowingById = async (showingId) => {
    let showing = await fetch (`/api/v1/showings/${showingId}`);
    showing = await showing.json();
    console.log(showing);
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
    console.log('All showings today:', showings);
    setTodaysShowings(showings)

    //preventing errors
    if(showings.length) {
      removeDuplicates(showings, "time");
      fixPosters(showings, "poster");
    };
  }

  function removeDuplicates(showings, time) {

    //for filtering out duplicates, removing obj with the same "time" value
    let uniq = [];
    uniq = showings
       .map(showing => showing[time])
       .map((showing, i, final) => final.indexOf(showing) === i && i)
       .filter(showing => showings[showing]).map(showing => showings[showing]);

    //pusching in key "time" to new array
    let times = [];
    uniq.forEach((showing) => {
      times.push(showing.time);
      console.log("this is times:", times);
    });

    //adding back movie obj to the "right time"
    let timesAndMovies = [];
    times.forEach((time) => {
      let temp = showings.filter(movie => movie.time === time);
      timesAndMovies.push({time, temp});

    });

    //setting state-variable only when array is finished
    if(timesAndMovies.length) {
      setTodaysSchema(timesAndMovies);
    };
  };

  function fixPosters(showings, poster) {

    let posterArr = [];
    showings.map((show) => {
      show.movieId.map((movie) => {
        //creating new array of obj with posters
        posterArr.push({ poster: movie.poster });
      });
    });

    //filtering out duplicates, creating new array
    let uniq = [];
    uniq = [...new Map(posterArr.map(obj => [obj[poster], obj])).values()]
    console.log("This is uniq arr:", uniq);

    if(uniq.length) {
      setTodaysPoster(uniq);
    };
  };

  useEffect(() => {
    console.log("posterssss", todaysPosters)
  }, [todaysPosters])

  useEffect(() => {
    getAllMovies();
    getShowingById('60acc75a2e0da01dfcbd1854');
    getShowingsByMovieAndDate('60acacd346075c18aeee45b8', '2021-06-13')
    getShowingsByCurrentDate();
  }, [])

  const values = {
    getAllMovies,
    allMovies,
    getMovieById,
    movieById,
    todaysShowings,
    todaysSchema,
    todaysPosters
  }

  return (
    <MovieContext.Provider value={ values }>
      { props.children }
    </MovieContext.Provider>
   );
}

export default MovieProvider;