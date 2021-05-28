import styles from '../css/MovieDetails.module.css';
import MovieDetailsHeader from "../components/MovieDetailsHeader";
import Showings from '../components/Showings';

function MovieDetails(props) {

    let movieId = props.match.params.id;

    console.log(props);
    return (
        <div className="container">
            <MovieDetailsHeader movieId={movieId} />
            {/* MovieDetails info in the middle */}
            <Showings />
        </div>
    )
}

export default MovieDetails;