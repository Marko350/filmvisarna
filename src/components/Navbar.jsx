import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import {
  navbar,
  links,
  pic,
  hamburgerLinks,
  filmStrip,
  filmStripDesktop,
  close,
} from "../css/Navbar.module.css";
import logo from "../assets/filmvisarna-logo.png";
import FilmStrip from "../assets/Filmstrip.png";
import FilmStripDesktop from "../assets/FilmstripDesktop.png";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const history = useHistory();

  function toggleNavMenu() {
    setDisplayMenu(!displayMenu);
  }

  return (
    <nav className={navbar}>
      {!displayMenu ? (
        <i className="fas fa-bars" onClick={toggleNavMenu}></i>
      ) : (
        <div className={close}>
          <i className="fas fa-times" onClick={toggleNavMenu}></i>
        </div>
      )}
      <div className={pic}>
        <img
          style={{ cursor: "pointer" }}
          src={logo}
          alt="Logo"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
      <img className={filmStrip} src={FilmStrip} alt="Filmstrip" />
      <img
        className={filmStripDesktop}
        src={FilmStripDesktop}
        alt="Filmstrip"
      />
      <div className={links}>
        <NavLink to="/">Startsidan</NavLink> <span></span>
        <NavLink to="/movie-list">Alla Filmer</NavLink> <span></span>
        {/* <NavLink to="search">Sök Filmer</NavLink> <span></span> */}
        <NavLink to="/about">Om oss</NavLink>
        {/* <p style={{ cursor: "pointer" }}>Logga in/Registrera</p> */}
      </div>
      <img className={filmStrip} src={FilmStrip} alt="Filmstrip" />
      <img
        className={filmStripDesktop}
        src={FilmStripDesktop}
        alt="Filmstrip"
      />
      <i className="fas fa-user"></i>
      {displayMenu && (
        <ul className={hamburgerLinks}>
          <NavLink onClick={toggleNavMenu} to="/">
            Startsidan
          </NavLink>{" "}
          <NavLink onClick={toggleNavMenu} to="/movie-list">
            Alla Filmer
          </NavLink>{" "}
          <NavLink onClick={toggleNavMenu} to="/about">
            Om oss
          </NavLink>{" "}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
