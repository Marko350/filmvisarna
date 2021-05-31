import styles from "../css/ConfirmationPage.module.css";
import ConfirmationPageInfo from "../components/ConfirmationPageInfo";

function ConfirmationPage() {

    return (
        <div className="container">
            <div className={styles.textContainer}>
                <h1 className={styles.confirmationH1} >TACK!</h1>
                <p>Din bokning var framgångsrik.</p>
            </div>
            <ConfirmationPageInfo/>
        </div>
    )
}

export default ConfirmationPage;