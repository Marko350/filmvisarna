import MovieCard from "./MovieCard";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import styles from "../css/MovieCardList.module.css";

function MovieCardList() {
  const { allMovies } = useContext(MovieContext);

  return (
    <div className={styles.movieCardList}>
      {allMovies &&
        allMovies.map((movie, i) => <MovieCard key={i} movie={movie} />)}
    </div>
  );
}

export default MovieCardList;
