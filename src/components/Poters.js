import styles from "../css/Posters.module.css";

const Posters = () => {
    return(
        <div>
            <div className={styles.postersContainer}>
                <div className={styles.posterContainerOne}>
                    <img className={styles.imgOne} src="https://lh3.googleusercontent.com/proxy/G6JikbdOjmj8Vnf3m9njM3wLiQF8lC2-kJT74F8-aUbkYpkKyQpQ270QjgV1maCPo-Oibp9G4VqCzcGxBI5EPJFdf41YpOMJrMKoPCP0sMIQeVio" alt=""></img>
                </div>
                <div className={styles.posterContainerTwo }>
                    <img className={styles.imgTwo} src="https://lh3.googleusercontent.com/proxy/y4A6qlzZufFCDHQPObG0-4DMo7mj6d_FDLmPIELQ4K_iL6UhPw_8PPmEYHRGtH2zukMzRQ8yeclSKJ-1BeW37R-n4hGvL8hpeDdp_VAbInd44jo8" alt=""></img>
                    <img className={styles.imgThree} src="https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg" alt=""></img>
                </div>
            </div>
            <div className={styles.schema}>
                <div>
                    <h2>Time</h2>
                    <p>Star wars: Return of the jedi</p>
                </div>

                <div className={styles.margin}>
                    <h2>Time</h2>
                    <p>The big Sleep</p>
                    <p>Woman On Run</p>
                </div>


                <div className={styles.margin}>
                    <h2>Time</h2>
                    <p>Woman On Run</p>
                    <p>Star wars: Return of the jedi</p>
                    <p>This Gun For Hire</p>
                </div>
            </div>
        </div>
    )
};

export default Posters;