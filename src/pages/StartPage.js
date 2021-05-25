import styles from "../css/StartPage.module.css"
import Hero from "../components/Hero";

const StartPage = () => {
    return(
        <div className={styles.startPageWrapper}>
            <h1>Start Sida</h1>
            <Hero />
        </div>
    )
}

export default StartPage;