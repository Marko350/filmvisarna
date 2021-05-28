import styles from "../css/Posters.module.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Posters = () => {
    const {today} = useContext(MovieContext);

    const renderPosters = () => {
        return(
            <div>
                <h2 className={styles.postersHeading}>Dagens visningar</h2>
                <div className={styles.mainWrapper}>
                    <div className={styles.postersWrapper}>
                        <div className={styles.posterContainerOne}>
                            <img className={styles.imgOne} src={today[0].temp[0].movieId[0].poster} alt="poster" />
                        </div>
                        <div className={styles.posterContainerTwo}>
                            <img className={styles.imgTwo} src={today[0].temp[1].movieId[0].poster} alt="poster"  />
                            <img className={styles.imgThree} src={today[0].temp[0].movieId[0].poster} alt="poster"  />
                        </div>
                    </div>
                    <div className={styles.schema}>
                        {today.map((t, i) => (
                            <div className={styles.margin} key={i}>
                                <h2>{t.time}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // If allMovies is "true" call on renderPosters() to display page, if not p-tag will show
    return today ? renderPosters() : <p>Loading...</p>
};

export default Posters;