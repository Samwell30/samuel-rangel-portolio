import { Link } from "react-router-dom";

const Nav = ({ onContactClick, onAboutClick }) => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__icon-wrapper">
          <i
            className="fa-solid fa-computer nav__icon"
            style={{ fontSize: "2rem", color: "#333" }}
          ></i>
        </div>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <a className="about__btn" onClick={onAboutClick}>About</a>
          </li>
          <li className="nav__list">
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li>
            <a className="btn" onClick={onContactClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
