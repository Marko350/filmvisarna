import styles from "../css/HeroComp.module.css";
import Btn from "../assets/buttonImg/btn-small.png";
import { useHistory } from "react-router-dom";

const Hero = () => {
    const historyHook = useHistory();

    const clickToRender = () => {
        historyHook.push("/movie-list");
    }
    return(
        <div className={styles.heroWrapper}>
            <div className={styles.heroGreeting}>
                <h1>Välj bland ett urval av gamla godingar</h1>
            </div>
            <div className={styles.btnContainer} onClick={clickToRender}>
                <div className={styles.btn}>
                    <p>Välj film</p>
                    <img src={Btn} alt="Button" />
                </div>
            </div>
        </div>
    )
};

export default Hero;