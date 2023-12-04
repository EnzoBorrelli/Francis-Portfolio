import "./NavMenu.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="nav">
      <div className="nav-profile">
        <div className="nav-image">
          <img src={logo} alt="logo image" />
        </div>
        <div className="nav-name">Francis Design Portfolio</div>
      </div>
      <nav className="nav-menu">
        <ul className="nav-menu-links">
          <li className="nav-link">
            <NavLink to="/Home">Inicio</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/Projects">Proyectos</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/About">Sobre Mi</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/Contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
