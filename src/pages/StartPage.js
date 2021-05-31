import styles from "../css/StartPage.module.css"
import Hero from "../components/Hero";
import Posters from "../components/Posters";
import Schema from "../components/StartPSchema";

const StartPage = () => {
    return(
        <div className={styles.startPageWrapper}>
                <Hero />
            <div className="container">
                <div className={styles.mainWrapper}>
                    <Posters />
                    <Schema />
                </div>
            </div>
        </div>
    )
}

export default StartPage;