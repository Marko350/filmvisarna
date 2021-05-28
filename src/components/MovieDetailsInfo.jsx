import styles from '../css/MovieDetailsInfo.module.css';
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import infoBtn from "../assets/buttonImg/btn-medium.png";

function MovieDetailsInfo({movieId}) {

    const {movieById, getMovieById} = useContext(MovieContext);

    useEffect(() => {
        getMovieById(movieId);
    }, [])


    return (
        <div className="container">
           { movieById && 
                <div className={styles.infoSection}>
                    <div className={styles.btnContainer}>
                        <img src={infoBtn} alt="Knapp för att boka biljett" className={styles.infoBtn} />
                        <h2 className={styles.infoBtnName}>Biljetter</h2>
                    </div>
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