import React from "react";
import { motion, useTransform } from "framer-motion";


const Navbar = ({ scrollYProgress }) => {
  // Animate background and shadow based on scroll
  const background = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(15,23,42,0.85)", "rgba(22,101,52,0.95)"]
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0 2px 8px rgba(0,0,0,0)", "0 4px 24px rgba(22,101,52,0.15)"]
  );

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ background, boxShadow, position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
    >
      <div className="navbar-content">
        <div className="navbar-logo">
          <span>Samuel Rangel</span>
        </div>
        <div className="navbar-links">
          <a
            href="https://www.linkedin.com/in/samuel-rangel-32494319a"
            target="_blank"
            rel="noreferrer"
          >Linkedin</a>
          <a
            href="https://github.com/Samwell30"
            target="_blank"
            rel="noreferrer"
          >Github</a>
          <a href={require("../assets/Samuel Rangel Resume.docx")}
            className="social__link click"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;