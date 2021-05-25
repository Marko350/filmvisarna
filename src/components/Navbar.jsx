import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import {
  navbar,
  links,
  pic,
  hamburgerLinks,
  filmStrip,
} from "../css/Navbar.module.css";
import logo from "../assets/filmvisarna-logo.png";
import cinema from "../assets/Filmstrip.png";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const history = useHistory();

  function toggleNavMenu() {
    setDisplayMenu(!displayMenu);
  }

  return (
    <nav className={navbar}>
      {!displayMenu ? (
        <i class="fas fa-bars" onClick={toggleNavMenu}></i>
      ) : (
        <i
          style={{ fontSize: "40px" }}
          class="fas fa-times"
          onClick={toggleNavMenu}
        ></i>
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
      <img className={filmStrip} src={cinema} alt="cinema" />
      <div className={links}>
        <NavLink to="/">Startsidan</NavLink> <span></span>
        <NavLink to="/movie-list">Alla Filmer</NavLink> <span></span>
        <NavLink to="search">Sök Filmer</NavLink> <span></span>
        <NavLink to="/about">Om oss</NavLink> <span></span>
        <p style={{ cursor: "pointer" }}>Logga in/Registrera</p>
      </div>
      <img className={filmStrip} src={cinema} alt="cinema" />
      <i class="fas fa-user"></i>
      {displayMenu && (
        <ul className={hamburgerLinks}>
          <NavLink onClick={toggleNavMenu} to="/">
            Startsidan
          </NavLink>{" "}
          <span></span>
          <NavLink onClick={toggleNavMenu} to="/movie-list">
            Alla Filmer
          </NavLink>{" "}
          <span></span>
          <NavLink onClick={toggleNavMenu} to="search">
            Sök Filmer
          </NavLink>{" "}
          <span></span>
          <NavLink onClick={toggleNavMenu} to="/about">
            Om oss
          </NavLink>{" "}
          <span></span>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
