import styles from "../css/ConfirmationPage.module.css";
import { MovieContext } from "../contexts/MovieContext";

function ConfirmationPageInfo({bookedTicket}) {

    console.log("heeeeeeeej", bookedTicket);
    return (
        <div className={styles.confirmationWrapper} >
            <img
                src={bookedTicket.seats}
                alt={bookedTicket.movieTitle}
                className={styles.confirmPoster}
            />
            <div className={styles.confirmationBox}>
                <h3>{bookedTicket.movieTitle}, {bookedTicket.time}</h3>
                <p>(Bokningsnr. 000000)</p>
                <p>Stolar: {bookedTicket.seats}</p>
                <br></br>
                <p>Summa: {bookedTicket.ticketTypes.totalPrice} :- </p>
            </div>
        </div>
    )
}

export default ConfirmationPageInfo;