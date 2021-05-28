import styles from '../css/MovieDetailsInfo.module.css';
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieDetailsInfo({movieId}) {

    const {movieById, getMovieById} = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId);
    }, [])


    return (
        <div className="container">
           <h1 className={styles.testh1}>TEST</h1> 
           { movieById && 
                <div className={styles.infoTextSection}>
                    <h3 className={styles.infoHeading}>Premiär:</h3> <p> KOLLA UPP</p>
                    <h3 className={styles.infoHeading}>Genre:</h3> <p> {movieById.genre}</p>
                    <h3 className={styles.infoHeading}>Längd:</h3> <p>{movieById.length} min</p>
                    <h3 className={styles.infoHeading}>Språk: </h3> <p>{movieById.language}</p>
                    <br></br>
                    <h3 className={styles.infoHeading}>Regissör: </h3> <p>{movieById.director}</p>
                    <br></br>
                    <h3 className={styles.infoHeading}>Skådespelare:</h3> <p>{movieById.actors}</p>
                    <br></br>
                    <p>{movieById.description}</p>

                </div>
            }
        </div>
    )
}

export default MovieDetailsInfo;