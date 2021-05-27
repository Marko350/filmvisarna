import styles from '../css/MovieDetailsHeader.module.css';
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieDetailsHeader({movieId}) {

    const {movieById, getMovieById} = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId);
    }, [])

    return (
        <div className="container">
            { movieById && 
                <div className={styles.container}>
                    <img src={movieById.poster} alt={movieById.name} />
                    
                </div>
            }
        </div>
    )
}

export default MovieDetailsHeader;