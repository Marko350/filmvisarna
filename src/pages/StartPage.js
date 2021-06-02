import styles from "../css/StartPage.module.css"
import Hero from "../components/Hero";
import Posters from "../components/Posters";
import Schema from "../components/StartPSchema";

const StartPage = () => {
    return(
        <div className={styles.startPageWrapper}>
                <Hero />
            <div className="container">
                <h2 className={styles.schemaGreeting}>Dagens visningar</h2>
                <div className={styles.mainWrapper}>
                    <Posters />
                    <Schema />
                </div>
            </div>
        </div>
    )
}

export default StartPage;