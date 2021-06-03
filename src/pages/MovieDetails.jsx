import styles from "../css/MovieDetails.module.css";
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";
import Showings from "../components/Showings";

function MovieDetails(props) {
  let movieId = props.match.params.id;

  return (
    <div className="container">
      <MovieDetailsHeader movieId={movieId} />
      <MovieDetailsInfo movieId={movieId} />
      <Showings movieId={movieId} />
    </div>
  );
}

export default MovieDetails;
