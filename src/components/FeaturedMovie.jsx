import styles from '../css/MovieList.module.css';
import headerImg from '../assets/Placeholder-featuredMovie(1).jpg';
import posterImg from '../assets/200px-CasablancaPoster-Gold.jpg';

function FeaturedMovie() {
    return (
        <div className={styles.featuredMovieWrapper}>
            <div className={styles.headerImg}>
                <img src={headerImg} alt="Casablanca placeholder" />
            </div>
            <div className={styles.imgOverlay}>
                <img src={posterImg} alt="Casablanca poster placeholer" />
                <div className="movie-info">
                    <p className={styles.title}>Casablanca</p>
                    <p className={styles.date}>21/5 - 3/6</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovie;