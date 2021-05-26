import styles from '../css/MovieDetails.module.css';
import MovieDetailsHeader from "../components/MovieDetailsHeader";

function MovieDetails() {
    return (
        <div className="container">
            <div className={styles.testDiv}>TEST</div>
            <MovieDetailsHeader></MovieDetailsHeader>
        </div>
    )
}

export default MovieDetails;