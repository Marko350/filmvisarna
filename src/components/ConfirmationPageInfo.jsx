import styles from "../css/ConfirmationPage.module.css";

function ConfirmationPageInfo({bookedTicket}) {
 
    return (
        <div className="container">
            <div className={styles.confirmationWrapper} >
                <div className={styles.confirmationBox}>
                    <div className={styles.gridMain}>
                        <h3 className={styles.confirmHeading}>{bookedTicket.movieTitle}</h3>
                        <h3 className={styles.confirmDate}>{bookedTicket.date}, {bookedTicket.time}</h3>
                        <p className={styles.confirmP}> Bokade stolar: </p>
                        <div className={styles.bookedChairs}>
                        {bookedTicket.seats && bookedTicket.seats.map(seat => <p key={seat} className={styles.confirmChair}>{seat} &nbsp;</p>)}
                        </div>
                    </div>
                    <img
                        src={bookedTicket.poster}
                        alt={bookedTicket.movieTitle}
                        className={styles.confirmPosterTest}
                    />
                    <br></br>
                    <div className={styles.gridFooter}>
                    <p className={styles.confirmTotal}>Summa: {bookedTicket.ticketTypes.totalPrice} :- </p>
{/*                    <p className={styles.findOrderHistoryText}>Du hittar alltid din orderhistorik under Mina sidor. </p>*/}
                    <p className={styles.findOrderHistoryText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPageInfo;