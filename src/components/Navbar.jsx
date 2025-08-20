import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-content">
        <div className="navbar-logo">
          {/* Replace with your logo or name */}
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
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;