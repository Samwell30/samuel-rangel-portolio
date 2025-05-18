import { Link } from "react-router-dom";

const Nav = ({ onContactClick, onAboutClick }) => {
  return (
    <nav>
      <figure>
      <i id="logo" className="fa-solid fa-laptop"
      style={{ fontSize: "2rem", color: "#333" }}></i>
      </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a className="nav__link--anchor" onClick={onAboutClick}>About</a>
          </li>
          <li className="nav__link">
            <a href="#projects" className="nav__link--anchor">
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a className="nav__link--anchor contact" onClick={onContactClick}>
              Contact
            </a>
          </li>
        </ul>
    </nav>
  );
};

export default Nav;