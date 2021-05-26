import styles from "../css/StartPage.module.css"
import Hero from "../components/Hero";
import Posters from "../components/Poters";

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