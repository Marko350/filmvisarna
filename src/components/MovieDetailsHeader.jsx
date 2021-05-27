import styles from '../css/MovieDetailsHeader.module.css';
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import playbtn from "../assets/playicon.png";
import headerImg from '../assets/Placeholder-featuredMovie(1).jpg';

function MovieDetailsHeader({movieId}) {

    const {movieById, getMovieById} = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId);
    }, [])

    return (
        <div className={styles.moviePosterContainer} >
            <img src={headerImg} className={styles.movieDetailsPlaceHolder} />
             { movieById && 
                    <img src={movieById.poster} alt={movieById.name} className={styles.movieDetailsPoster} />
            }
            <img src={playbtn} className={styles.playbtn} />
        </div>
    )
}

export default MovieDetailsHeader;