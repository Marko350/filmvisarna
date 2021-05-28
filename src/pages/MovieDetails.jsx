import styles from '../css/MovieDetails.module.css';
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";

function MovieDetails(props) {

    let movieId = props.match.params.id;

    console.log(props);
    return (
        <div className="container">
            <MovieDetailsHeader movieId={movieId} />
            <MovieDetailsInfo/>
        </div>
    )
}

export default MovieDetails;