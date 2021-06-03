import styles from "../css/MovieDetailsHeader.module.css";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import playbtn from "../assets/playicon.png";

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
      <div className={styles.moviePosterContainer}>
        <div className={styles.gradientWrapper}>
          <img
            src={movieById.coverImg}
            alt={movieById.title}
            className={styles.movieDetailsPlaceHolder}
          />
          <div className={styles.gradient}></div>
        </div>

        <div className={styles.posterTitleGenre}>
          <img
            src={movieById.poster}
            alt={movieById.name}
            className={styles.movieDetailsPoster}
          />
          <div className={styles.titleGenre}>
            <h1 className={styles.detailsTitle}>{movieById.title}</h1>
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
