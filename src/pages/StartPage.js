import styles from "../css/StartPage.module.css"
import Hero from "../components/Hero";
import Posters from "../components/Posters";

const StartPage = () => {
    return(
        <div className={styles.startPageWrapper}>
                <Hero />
            <div className="container">
                <Posters />
            </div>
        </div>
    )
}

export default StartPage;