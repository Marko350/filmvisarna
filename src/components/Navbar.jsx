import { NavLink } from "react-router-dom";
import { navbar, links, pic } from "../css/Navbar.module.css";
import logo from "../assets/filmvisarna-logo.png";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <i class="fas fa-bars"></i>
      <div className={pic}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={links}>
        <NavLink to="/">Startsidan</NavLink> <span></span>
        <NavLink to="/movies">Alla Filmer</NavLink> <span></span>
        <NavLink to="search">Sök Filmer</NavLink> <span></span>
        <NavLink to="/about">Om oss</NavLink> <span></span>
        <p style={{ cursor: "pointer" }}>Logga in/Registrera</p>
      </div>

      <i class="fas fa-user"></i>
    </nav>
  );
};

export default Navbar;
