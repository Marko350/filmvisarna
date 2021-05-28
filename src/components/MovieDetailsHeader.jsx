import styles from '../css/MovieDetailsHeader.module.css';
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import playbtn from "../assets/playicon.png";
import headerImg from '../assets/casablanca.jpeg';

function MovieDetailsHeader({movieId}) {

    const {movieById, getMovieById} = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId);
    }, [])

    return (
        <div className={styles.moviePosterContainer} >
            <div className={styles.gradientWrapper}>
                <img src={headerImg} className={styles.movieDetailsPlaceHolder} />
                <div className={styles.gradient}></div>
            </div>
             { movieById && 
                <div className={styles.posterTitleGenre}>
                    <img src={movieById.poster} alt={movieById.name} className={styles.movieDetailsPoster} />
                    <div className={styles.titleGenre}>
                        <h1 className={styles.detailsTitle}>{movieById.title}</h1>
                        <div className={styles.detailsGenreLength}>
                            <p className={styles.detailsGenre}>{movieById.genre} &nbsp;</p>
                            <p className={styles.detailsGenre}>&nbsp; {movieById.length} min</p>
                        </div>
                    </div>
                </div>
            }
            <img src={playbtn} className={styles.playbtn} />
        </div>
    )
}

export default MovieDetailsHeader;