import React from "react";
import samDenise from "../assets/Sam_Denise.jpg";
import Projects from "./Projects";
import BackgroundShapes from "../Ui.jsx/BackgroundShapes";

const Home = ({ onAboutClick }) => {
  return (
    <main className="main__content">
      <BackgroundShapes />
      <div className="header__content-wrapper">
        <div className="header__content">
          <h1 className="header__title">
            Hello, <br /> I am <span className="green">Samuel</span>
          </h1>
          <p className="header__para">
            I am a <span className="green">Frontend Software Engineer</span>{" "}
            with a strong passion for building web applications with greater
            user experiences.
            <br /> Here is a bit more{" "}
            <a className="green click" href="#about" onClick={onAboutClick}>
              about me
            </a>
          </p>
          <div className="social__list">
            <a
              href="https://www.linkedin.com/in/samuel-rangel-32494319a"
              className="social__link click"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Samwell30"
              className="social__link click"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={require("../assets/Samuel Rangel Resume.docx")}
              className="social__link click"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <i className="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>
        <div className="holographic-container">
          <div className="holographic-card">
            <img className="selfie" src={samDenise} alt="Samuel Denise" />
          </div>
        </div>{" "}
      </div>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
};

export default Home;