import styles from "../css/ConfirmationPage.module.css";

function ConfirmationPageInfo() {

    return (
        <div className={styles.confirmationWrapper} >
            <div className={styles.confirmPoster}>Placeholder image</div>
            <div className={styles.confirmationBox}>
                <h3>FilmRubrik och tid 00000</h3>
                <p>Bokningsnr. 000000</p>
                <p>Stolar: A12, A13, A14</p>
                <br></br>
                <p>Summa: 100SEK</p>
            </div>
        </div>
    )
}

export default ConfirmationPageInfo;