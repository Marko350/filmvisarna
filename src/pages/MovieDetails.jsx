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
            <p className={styles.arrowText}>Hitta visningar nedan</p>
            <div className={styles.btnDown}>
                <i
                    onClick={() => window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)}
                    className="fas fa-chevron-circle-down"
                ></i>
            </div>
            <MovieDetailsInfo movieId={movieId}/>
            <Showings movieId={movieId} />
        </div>
    )
}

export default MovieDetails;