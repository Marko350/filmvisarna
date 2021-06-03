import { useHistory } from 'react-router';
import styles from '../css/FeaturedMovie.module.css';

function FeaturedMovie({ movie }) {

    const history = useHistory();

    return (
        <div className={styles.featuredMovieWrapper} onClick={() => history.push(`/movie-list/${movie._id}`)}>
            <div className={styles.gradientWrapper}>
                <img className={styles.headerImg} src={movie.coverImg} alt={movie.title} />
                <div className={styles.gradient}></div>
            </div>
            <div className={styles.imgWrapper}>
                <img className={styles.posterImg} src={movie.poster} alt={`${movie.title} poster`} />
                <div className={styles.movieInfo}>
                    <p className={styles.title}>{movie.title}</p>
                    <p className={styles.date}>1/6 - 26/7</p>
                    <p className={styles.dateDesktop}>Visas hos Filmvisarna från den <span className={styles.redText}>1/6</span> till den <span className={styles.redText}>26/7</span></p>
                </div>
            </div>
            <div className={styles.buyTickets}>Köp Biljetter</div>
        </div>
    )
}

export default FeaturedMovie;