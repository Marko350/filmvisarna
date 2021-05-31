import styles from "../css/Posters.module.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useHistory, UseHistory } from "react-router-dom";

const Posters = () => {
    const {todaysPosters} = useContext(MovieContext);
    const historyHook = useHistory();

    const clickToRender = (id) => {
        historyHook.push(`/movie-list/${id}`);
    }

    const renderPosters = () => {
        return(
            <div className={styles.postersWrapper}>
                <div className={styles.posterContainerOne}>
                    <img className={styles.imgOne} onClick={() => clickToRender(todaysPosters[0].id)} src={todaysPosters[0].poster} alt="poster" />
                </div>
            <div className={styles.posterContainerTwo}>
                <img className={styles.imgTwo} onClick={() => clickToRender(todaysPosters[1].id)} src={todaysPosters[1].poster} alt="poster" />
                <img className={styles.imgThree} onClick={() => clickToRender(todaysPosters[2].id)} src={todaysPosters[2].poster} alt="poster" />
            </div>
            </div>
        );
    };

    // If todaysPosters is "true" call on renderPosters() to display page, if not p-tag will show
    return todaysPosters ? renderPosters() : <div></div>
};

export default Posters;