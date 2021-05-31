import styles from "../css/MovieList.module.css";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieCardList from "../components/MovieCardList";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieList() {

  const { getMovieById, movieById } = useContext(MovieContext);

  useEffect(() => {
    getMovieById("60b49a37b62f8359984329e7");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
        <div className="header">
            <h2 className={styles.heading}>I fokus</h2>
            {movieById && <FeaturedMovie movie={movieById} />}
        </div>
        <div className="movie-list">
            <h2 className={styles.heading}>Alla filmer</h2>
            <div className={styles.filterLine}>
                <h3>På bio nu</h3>
                <p>Visa filter</p> {/* Make onClick when filter component is done */}
            </div>
            <MovieCardList />
        </div>
    </div>
  );
}

export default MovieList;
