import styles from "../css/ConfirmationPage.module.css";
import {useContext, useState, useEffect} from "react";
import ConfirmationPageInfo from "../components/ConfirmationPageInfo";
import {MovieContext} from "../contexts/MovieContext";

function ConfirmationPage() {
   
    let bookedTicket = JSON.parse(localStorage.getItem("myItem"))

    return (
        <div className="container">
            <div className={styles.textContainer}>
                <h1 className={styles.confirmationH1} >TACK!</h1>
                <p>Din bokning var framgångsrik.</p>
            </div>
            <ConfirmationPageInfo bookedTicket={bookedTicket}/>
        </div>
    )
}

export default ConfirmationPage;