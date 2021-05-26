import styles from '../css/FeaturedMovie.module.css';
import headerImg from '../assets/Placeholder-featuredMovie(1).jpg';

function FeaturedMovie({ movie }) {
    return (
        <div className={styles.featuredMovieWrapper}>
            <img src={headerImg} alt="Casablanca placeholder" />
            <div className={styles.imgOverlay}>
                <img src={movie.poster} alt={`${movie.title} poster`} />
                <div className="movie-info">
                    <p className={styles.title}>{movie.title}</p>
                    <p className={styles.date}>21/5 - 3/6</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie;