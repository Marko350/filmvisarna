import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { MovieContext } from '../contexts/MovieContext';
import styles from '../css/Showings.module.css';

function Showings({ movieId }) {

    const date = new Date().toISOString().slice(0, 10);
    const history = useHistory();

    const { getShowingsByMovieAndDate, movieShowings } = useContext(MovieContext);
    const [newDate, setNewDate] = useState(date)

    useEffect(() => {
        getShowingsByMovieAndDate(movieId, newDate);
        // eslint-disable-next-line
    }, [newDate]);

    const handleChange = (e) => {
        setNewDate(e.target.value);
    };

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
                    max="2021-12-31"
                    onChange={handleChange} />
            </div>
            <div className={styles.schedule}>
                {movieShowings ? (movieShowings.map(showing => (
                    <div key={showing._id} className={styles.scheduleItem} onClick={() => history.push(`/booking/${showing._id}`)}>
                        <p className={styles.time}>{showing.time}</p>
                        <p className={styles.screen}>{showing.screenId[0].name}</p>
                    </div>
                ))) : (
                    <p>Inga visningar på valt datum</p>
                )}
            </div>
        </div>
    )
}

export default Showings;