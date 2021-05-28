import { useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import styles from '../css/Showings.module.css';
import SingleShowing from './SingleShowing';

function Showings({ movieId }) {

    const { getShowingsByMovieAndDate, movieShowings } = useContext(MovieContext);

    const date = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        getShowingsByMovieAndDate(movieId, date);
    }, []);

    return (
        <div className="showings">
            <div className={styles.datepickerLine}>
                <h2>Date</h2>
                <input
                    type="date"
                    id="date"
                    name="date"
                    defaultValue={date}
                    min={date}
                    max="2021-12-31" />
            </div>
            <div className="schedule">
                {movieShowings && movieShowings.map(showing => (
                    <SingleShowing key={showing._id} />
                ))}
            </div>
        </div>
    )
}

export default Showings;