import styles from '../css/MovieList.module.css';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieCardList from '../components/MovieCardList';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';

function MovieList() {

    const { getMovieById, oneMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovieById("60acacd346075c18aeee45b3");
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h2 className={styles.heading}>I fokus</h2>
                {oneMovie && <FeaturedMovie movie={oneMovie} />}
            </div>
            <div className="movie-list">
                <h2 className={styles.heading}>Alla filmer</h2>
                <div className={styles.filterLine}>
                    <h3>På bio nu</h3>
                    <p>Visa filter</p> {/* Make onClick when filter component is done */}
                </div>
                <MovieCardList />
            </div>
        </div>
    )
}

export default MovieList;