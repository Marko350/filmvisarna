import { useContext, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import styles from '../css/Showings.module.css';

function Showings({ movieId }) {

    const { getShowingsByMovieAndDate, movieShowings } = useContext(MovieContext);

    const date = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        getShowingsByMovieAndDate(movieId, date);
        // eslint-disable-next-line
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
            <div className={styles.schedule}>
                {movieShowings && movieShowings.map(showing => (
                    <div key={showing._id} className={styles.scheduleItem}>
                        <p className={styles.time}>{showing.time}</p>
                        <p className={styles.screen}>{showing.screenId[0].name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Showings;