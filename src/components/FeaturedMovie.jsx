import styles from '../css/FeaturedMovie.module.css';
import headerImg from '../assets/casablanca.jpeg';

function FeaturedMovie({ movie }) {
    return (
        <div className={styles.featuredMovieWrapper}>
            <div className={styles.gradientWrapper}>
                <img className={styles.headerImg} src={headerImg} alt="Casablanca placeholder" />
                <div className={styles.gradient}></div>
            </div>
            <div className={styles.imgWrapper}>
                <img className={styles.posterImg} src={movie.poster} alt={`${movie.title} poster`} />
                <div className={styles.movieInfo}>
                    <p className={styles.title}>{movie.title}</p>
                    <p className={styles.date}>21/5 - 3/6</p>
                    <p className={styles.dateDesktop}>Visas hos Filmvisarna från den <span className={styles.redText}>21/5</span> till den <span className={styles.redText}>3/6</span></p>
                </div>
            </div>
            <div className={styles.buyTickets}>Köp Biljetter</div>
        </div>
    )
}

export default FeaturedMovie;