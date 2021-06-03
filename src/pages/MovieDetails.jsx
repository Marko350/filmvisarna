import styles from '../css/MovieDetails.module.css';
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";
import Showings from '../components/Showings';
import { useEffect, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

function MovieDetails(props) {
    const { setMovieById } = useContext(MovieContext);
    let movieId = props.match.params.id;

    useEffect(() => {
        return () => {
            setMovieById(null);
          }
    }, [])

    console.log(props);
    return (
        <div className="container">
            <MovieDetailsHeader movieId={movieId} />
            <MovieDetailsInfo movieId={movieId}/>
            <Showings movieId={movieId} />
        </div>
    )
}

export default MovieDetails;