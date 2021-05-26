import styles from '../css/MovieCard.module.css';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.name} />
            <div className="movie-card-info">
                <h4>{movie.title}</h4>
                <div className="movie-info-details">
                    <p>{movie.genre}</p>
                    <p>{movie.length} min</p>
                    <p>{movie.ageLimit} år</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;