import styles from '../css/Showings.module.css';

function Showings() {

    const date = new Date().toISOString().slice(0, 10);

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
        </div>
    )
}

export default Showings;