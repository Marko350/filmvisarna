import styles from "../css/Posters.module.css";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Posters = () => {
    const {todaysShowings} = useContext(MovieContext);

    const renderPosters = () => {
        return(
            <div>
                <h2 className={styles.postersHeading}>Dagens visningar</h2>
                <div className={styles.mainWrapper}>
                    <div className={styles.postersWrapper}>
                        <div className={styles.posterContainerOne}>
                            <img className={styles.imgOne} src={todaysShowings[0].movieId[0].poster} alt={todaysShowings[0].title} />
                        </div>
                        <div className={styles.posterContainerTwo }>
                            <img className={styles.imgTwo} src={todaysShowings[1].movieId[0].poster} alt={todaysShowings[1].title} />
                            <img className={styles.imgThree} src={todaysShowings[2].movieId[0].poster} alt={todaysShowings[2].title} />
                        </div>
                    </div>
                    <div className={styles.schema}>
                        {/*Lopping showing time and movie-title */}
                        {todaysShowings.map((showing, i) => (
                            <div className={styles.margin} key={i}>
                                <h2>{showing.time}</h2>
                                <p>{showing.movieId[0].title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // If allMovies is "true" call on renderPosters() to display page, if not p-tag will show
    return todaysShowings ? renderPosters() : <p>Loading...</p>
};

export default Posters;