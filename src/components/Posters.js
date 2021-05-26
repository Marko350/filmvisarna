import styles from "../css/Posters.module.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Posters = () => {
    const {allMovies} = useContext(MovieContext);

    const renderPosters = () => {
        return(
            <div>
                <h2 className={styles.postersHeading}>Dagens visningar</h2>
                <div className={styles.mainWrapper}>
                <div className={styles.postersWrapper}>
                    <div className={styles.posterContainerOne}>
                        <img className={styles.imgOne} src={allMovies[0].poster} alt={allMovies[0].title} />
                    </div>
                    <div className={styles.posterContainerTwo }>
                        <img className={styles.imgTwo} src={allMovies[1].poster} alt={allMovies[1].title} />
                        <img className={styles.imgThree} src={allMovies[2].poster} alt={allMovies[2].title} />
                    </div>
                </div>
                <div className={styles.schema}>
                    <div>
                        <h2>Time</h2>
                        <p>Star wars: Return of the jedi</p>
                    </div>

                    <div className={styles.margin}>
                        <h2>Time</h2>
                        <p>The big Sleep</p>
                        <p>Woman On Run</p>
                    </div>


                    <div className={styles.margin}>
                        <h2>Time</h2>
                        <p>Woman On Run</p>
                        <p>Star wars: Return of the jedi</p>
                        <p>This Gun For Hire</p>
                    </div>
                </div>
            </div>

            </div>
        );
    };

    // If allMovies is "true" call on renderPosters() to display page, if not p-tag will show
    return allMovies ? renderPosters() : <p>Loading...</p>
};

export default Posters;