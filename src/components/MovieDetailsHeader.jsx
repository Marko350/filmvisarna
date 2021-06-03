import styles from "../css/MovieDetailsHeader.module.css";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import playbtn from "../assets/playicon.png";
import headerImg from "../assets/casablanca.jpeg";

function MovieDetailsHeader({ movieId }) {
  const { movieById, getMovieById } = useContext(MovieContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getMovieById(movieId);
    // eslint-disable-next-line
  }, []);

  function showModal() {
    setModal(!modal);
  }

  return (
    movieById && (
      <div className={styles.movieThumbnailWrapper}>
            <div className={styles.gradientWrapper}>
                <img className={styles.headerImg} src={headerImg} alt="Casablanca placeholder" />
                <div className={styles.gradient}></div>
            </div>
            <div className={styles.imgWrapper}>
                <img className={styles.posterImg} src={movieById.poster} alt={`${movieById.title} poster`} />
                <div className={styles.movieInfo}>
                    <p className={styles.title}>{movieById.title}</p>
                    <div className={styles.detailsGenreLength}>
                      <p className={styles.detailsGenre}>{movieById.genre} &nbsp;</p>
                      <p className={styles.detailsGenre}>
                        &nbsp; {movieById.length} min
                      </p>
                    </div> 
                </div>
            </div>
            <img
          src={playbtn}
          alt="play"
          className={styles.playbtn}
          onClick={showModal}
        />
        {modal && (
          <div className={styles.modal} onClick={showModal}>
            {movieById ? (
              <div className={styles.box}>
                <i className="far fa-times-circle"></i>
                <iframe
                  allow="fullscreen"
                  width="100%"
                  height="100%"
                  src={movieById.trailer}
                ></iframe>
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        )}
      </div>
    )
  );
}

export default MovieDetailsHeader;
