import MovieCard from './MovieCard';
import { MovieContext } from '../contexts/MovieContext';
import { useContext } from 'react';

function MovieCardList() {

    const { allMovies } = useContext(MovieContext);

    return (
        <div className="movie-card-list">
            { allMovies && allMovies.map((movie, i) => (
                <MovieCard key={i} movie={movie} />
            ))}
        </div>
    )
}

export default MovieCardList;