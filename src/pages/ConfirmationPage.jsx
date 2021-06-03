import styles from "../css/ConfirmationPage.module.css";
//import {useContext, useState, useEffect} from "react";
import ConfirmationPageInfo from "../components/ConfirmationPageInfo";
//import {MovieContext} from "../contexts/MovieContext";
import btn from "../assets/buttonImg/btn-small.png";
import { useHistory } from "react-router-dom";


function ConfirmationPage() {
    const history = useHistory();
    let bookedTicket = JSON.parse(localStorage.getItem("myItem"))

    return (
        <div className="container">
            <div className={styles.textContainer}>
                <h1 className={styles.confirmationH1} >TACK!</h1>
                <p>Din bokning var framgångsrik.</p>
            </div>
            <ConfirmationPageInfo bookedTicket={bookedTicket}/>
            <div className={styles.btnDiv}  onClick={() => {
                    history.push("/");
                }}>
                <img src={btn}className="mainBtn btnSmall" alt="Knapp för att komma tillbaka till startsidan."/>
                <h4 className={styles.confirmBtnName}>Tillbaka till startsidan</h4>
            </div>
        </div>
    )
}

export default ConfirmationPage;