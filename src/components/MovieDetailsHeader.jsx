import styles from '../css/MovieDetailsHeader.module.css';
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieDetailsHeader({movieId}) {

    const {movieById, getMovieById} = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId);
    }, [])

    return (
        <div className={styles.moviePosterContainer} >
            { movieById && 
                    <img src={movieById.poster} alt={movieById.name} className={styles.movieDetailsPoster} />
            }
        </div>
    )
}

export default MovieDetailsHeader;