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
                    <div className={styles.movieDetailsLaptop} >
                        <div className={styles.movieDetailsColumn}>
                            <div className={styles.infoHeadingP} >
                                <h3 className={styles.infoHeading}>Utgivningsår:</h3> <p className={styles.infoP}>{movieById.year}</p>
                            </div>
                            <div className={styles.infoHeadingP} >
                                <h3 className={styles.infoHeading}>Genre:</h3> <p className={styles.infoP}>{movieById.genre}</p>
                            </div>  
                            <div className={styles.infoHeadingP} >                 
                                <h3 className={styles.infoHeading}>Längd:</h3> <p className={styles.infoP}>{movieById.length} min</p>
                            </div>  
                            <div className={styles.infoHeadingP} >   
                                <h3 className={styles.infoHeading}>Språk: </h3> <p className={styles.infoP}>{movieById.language}</p>
                            </div>                     
                            <br></br>
                            <h3 className={styles.infoHeading}>Regissör: </h3> <p className={styles.infoP}>{movieById.director}</p>
                            <br></br>
                            <h3 className={styles.infoHeading}> Skådespelare: </h3>
                            {movieById.actors && movieById.actors.map(actor => <p key={actor} className={styles.infoP}>{actor}</p>)}
                            <br></br>
                        </div>
                        <p className={styles.movieInfoDesc} >{movieById.description}</p>
                    </div>
                </div>
            }
        </div> 
    )
}

export default MovieDetailsInfo;