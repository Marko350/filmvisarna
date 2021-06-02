import styles from '../css/MovieDetails.module.css';
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";
import Showings from '../components/Showings';

function MovieDetails(props) {

    let movieId = props.match.params.id;

    console.log(props);
    return (
        <div className="container">
            <MovieDetailsHeader movieId={movieId} />
            <p className={styles.arrowText}>Hitta visningar nedan</p>
            <div className={styles.btnDown}>
                <i
                    onClick={() => window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)}
                    className="fas fa-chevron-circle-down"
                ></i>
            </div>
            <MovieDetailsInfo movieId={movieId}/>
            <Showings movieId={movieId} />
        </div>
    )
}

export default MovieDetails;