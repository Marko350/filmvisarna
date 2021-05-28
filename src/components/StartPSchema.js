import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/StartPSchema.module.css";

const Schema = () => {
    const {todaysSchema} = useContext(MovieContext);

    const renderPosters = () => {
        return(
            <div className={styles.schemaWrapper}>
                <div className={styles.schema}>
                    {todaysSchema.map((today, i) => (
                        <div className={styles.margin} key={i}>
                            <h2>{today.time}</h2>
                            {today.temp.map((showing) => (
                                <p>{showing.movieId[0].title}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // If todaysSchema is "true" call on renderPosters() to display page, if not p-tag will show
    return todaysSchema ? renderPosters() : <p>Loading...</p>
}

export default Schema;