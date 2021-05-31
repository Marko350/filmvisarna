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
                        <img src={infoBtn} alt="Knapp för att boka biljett" className="mainBtn btnSmall" />
                        <h2 className={styles.infoBtnName}>Biljetter</h2>
                    </div>
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
                    <h3 className={styles.infoHeading}>Regissör: </h3> <p>{movieById.director}</p>
                    <br></br>
                    <h3 className={styles.infoHeading}> Skådespelare: </h3>
                        {movieById.actors.map(actor => <p className={styles.actorList}>{actor}</p>)}
                    <br></br>
                    <p className={styles.movieInfoP} >{movieById.description}</p>
                </div>
            }
        </div> 
    )
}

export default MovieDetailsInfo;