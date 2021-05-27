import styles from '../css/MovieCard.module.css';

function MovieCard({ movie }) {
    return (
        <div className={styles.movieCard}>
            <img src={movie.poster} alt={movie.name} />
            <div className={styles.movieInfo}>
                <h4>{movie.title}</h4>
                <div className={styles.movieInfoDetails}>
                    <p className={styles.movieGenre}>{movie.genre}</p>
                    <p className={styles.movieLength}>{movie.length} min</p>
                    <p className={styles.movieAgeLimit}>{movie.ageLimit} år</p>
                </div>
            </div>
            <div className={styles.readMore}>
                <p>Läs mer</p>
                <i className="fas fa-caret-right"></i>
            </div>
        </div>
    )
}

export default MovieCard;