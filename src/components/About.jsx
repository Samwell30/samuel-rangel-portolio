import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about__details">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            Hi, I'm Samuel! I'm passionate about building beautiful, user-friendly web
            experiences. My mission is to continuously advance in web development,
            using my growing expertise to drive societal progress through technology.
          </p>
          <div className="techstack">
            <h3>About this portfolio</h3>
            <p className="techstack__para">
              This portfolio is to display my skills and enjoyment of building React apps.
              <br /> The projects below were created using React, Firebase Javascript, CSS, and HTML.
            </p>
            <div className="icons">
              <i className="fa-brands fa-react tech-icon"></i>
              <i className="fa-brands fa-js tech-icon"></i>
              <i className="fa-brands fa-html5 tech-icon"></i>
              <i className="fa-brands fa-css3-alt tech-icon"></i>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;