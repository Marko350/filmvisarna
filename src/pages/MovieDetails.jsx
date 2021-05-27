import styles from '../css/MovieDetails.module.css';
import MovieDetailsHeader from "../components/MovieDetailsHeader";

function MovieDetails(props) {

    let movieId = props.match.params.id;

    console.log(props);
    return (
        <div className="container">
            <div className={styles.testDiv}>TEST</div>
            <MovieDetailsHeader movieId={movieId} />
        </div>
    )
}

export default MovieDetails;