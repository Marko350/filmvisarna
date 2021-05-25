import styles from "../css/HeroComp.module.css";

const Hero = () => {
    return(
        <div className={styles.heroWrapper}>
            <div className={styles.heroGreeting}>
                <h1>Välj bland ett urval av gamla godingar</h1>
            </div>
            <div className={styles.heroBtn}>
                <button type="button">Välj Film</button>
            </div>
        </div>
    )
};

export default Hero;