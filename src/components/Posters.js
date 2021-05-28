import styles from "../css/Posters.module.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Posters = () => {
    const {todaysPosters} = useContext(MovieContext);


    const renderPosters = () => {
        return(
            <div className={styles.postersWrapper}>
                <div className={styles.posterContainerOne}>
                    <img className={styles.imgOne} src={todaysPosters[0].poster} alt="poster" />
                </div>
            <div className={styles.posterContainerTwo}>
                <img className={styles.imgTwo} src={todaysPosters[1].poster} alt="poster" />
                <img className={styles.imgThree} src={todaysPosters[2].poster} alt="poster" />
            </div>
            </div>
        );
    };

    // If todaysPosters is "true" call on renderPosters() to display page, if not p-tag will show
    return todaysPosters ? renderPosters() : <div></div>
};

export default Posters;