import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/StartPSchema.module.css";

const Schema = () => {
    const {todaysSchema} = useContext(MovieContext);
    const historyHook = useHistory();

    const clicktoRender = (id) => {
        historyHook.push(`/movie-list/${id}`)
    }

    const renderPosters = () => {
        return(
            <div className={styles.schemaWrapper}>
                <div className={styles.schema}>
                    {todaysSchema.map((today, i) => (
                        <div className={styles.margin} key={i}>
                            <h2>{today.time}</h2>
                            {today.temp.map((showing, i) => (
                                <p className={styles.movieLink} onClick={() => clicktoRender(showing._id)} key={i}>{showing.movieId[0].title}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // If todaysSchema is "true" call on renderPosters() to display page, if not p-tag will show
    return todaysSchema ? renderPosters() : <p>Finns inga visningar tillgängliga...</p>
}

export default Schema;