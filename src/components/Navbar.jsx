import { NavLink } from "react-router-dom";
import { navbar, links, pic } from "../css/Navbar.module.css";
import logo from "../assets/filmvisarna-logo.png";

const Navbar = () => {
  return (
    <nav className={navbar}>
      <i class="fas fa-bars"></i>
      <div className={links}>
        <NavLink to="/">Startsidan</NavLink>
        <NavLink to="/movies">Alla Filmer</NavLink>
        <NavLink to="search">Sök Filmer</NavLink>
        <NavLink to="/about">Om oss</NavLink>
        <span>Logga in/Registrera</span>
      </div>
      <div className={pic}>
        <img src={logo} alt="Logo" />
      </div>
      <i class="fas fa-user"></i>
    </nav>
  );
};

export default Navbar;
