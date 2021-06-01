import styles from "../css/ConfirmationPage.module.css";
import btn from "../assets/buttonImg/btn-small.png";

function ConfirmationPageInfo({bookedTicket}) {
    console.log("hola",bookedTicket)

    return (
        <div className="container">
            <div className={styles.confirmationWrapper} >
                <img
                    src={bookedTicket.poster}
                    alt={bookedTicket.movieTitle}
                    className={styles.confirmPoster}
                />
                <div className={styles.confirmationBox}>
                    <h3 className={styles.confirmHeading}>{bookedTicket.movieTitle}</h3>
                    <h3 className={styles.confirmDate}>{bookedTicket.date}, {bookedTicket.time}</h3>
                    <p className={styles.confirmP}>(Bokningsnr?)</p>
                    <p className={styles.confirmP}>Stolar: {bookedTicket.seats}</p>
                    <br></br>
                    <p className={styles.confirmTotal}>Summa: {bookedTicket.ticketTypes.totalPrice} :- </p>
                    <p className={styles.findOrderHistoryText}>Du hittar alltid din orderhistorik under Mina sidor. </p>
                </div>
            </div>
            <img src={btn} alt="Knapp för att komma tillbaka till startsidan."/>
        </div>
    )
}

export default ConfirmationPageInfo;