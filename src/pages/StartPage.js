import styles from "../css/StartPage.module.css"
import Hero from "../components/Hero";

const StartPage = () => {
    return(
        <div className={styles.startPageWrapper}>
            <Hero />
        </div>
    )
}

export default StartPage;