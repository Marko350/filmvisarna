import styles from "../css/ConfirmationPage.module.css";
import { MovieContext } from "../contexts/MovieContext";

function ConfirmationPageInfo({bookedTicket}) {

    return (
        <div className={styles.confirmationWrapper} >
            <img
                src={bookedTicket.poster}
                alt={bookedTicket.movieTitle}
                className={styles.confirmPoster}
            />
            <div>
                <div className={styles.confirmationBox}>
                    <h3 className={styles.confirmHeading}>{bookedTicket.movieTitle}, {bookedTicket.time}</h3>
                    <p className={styles.confirmP}>(Bokningsnr. 000000)</p>
                    <p className={styles.confirmP}>Stolar: {bookedTicket.seats}</p>
                    <br></br>
                    <p className={styles.confirmTotal}>Summa: {bookedTicket.ticketTypes.totalPrice} :- </p>
                </div>
                <div className={styles.findOrderHistory}>
                    <p className={styles.findOrderHistoryText}>Du hittar alltid din orderhistorik under Mina sidor. </p>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPageInfo;