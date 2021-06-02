import { useHistory } from "react-router-dom";
import styles from "../css/Footer.module.css";
import logo from "../assets/filmvisarna-logo.png";

const Footer = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <div className={styles.btnUp}>
          <i
            onClick={() => window.scrollTo(0, 0)}
            className="fas fa-chevron-circle-up"
          ></i>
        </div>
        <img src={logo} alt="Logo" />
        <div className={styles.info}>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          <p>Ipsumgatan 34 Malmö</p>
          <p>010-123456789</p>
        </div>
      </div>
      <div className={styles.desktopContainer}>
        <div className={styles.ipad}>
          <div className={styles.icons}>
            <div className={styles.socialMedia}>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square"></i>
                <span>Facebook</span>
              </a>
            </div>
            <div className={styles.socialMedia}>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
            <div className={styles.socialMedia}>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter-square"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.ipad}>
            <img src={logo} alt="Logo" />
            <p>Ipsumgatan 34 Malmö</p>
            <p>010-123456789</p>
          </div>
        </div>
        <div className={styles.links}>
          <span onClick={() => history.push("/")}>Startsidan</span>
          <span onClick={() => history.push("/movie-list")}>Alla Filmer</span>
          <span onClick={() => history.push("/about")}>Om oss</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
