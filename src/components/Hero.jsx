import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Samuel Rangel</h1>
        <h2 className="hero-subtitle">FRONTEND</h2>
        <h2 className="hero-developer">DEVELOPER</h2>
        <p className="hero-tagline">
          Crafting modern, beautiful web experiences.
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;