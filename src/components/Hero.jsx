import { motion } from "framer-motion";


const name = "Samuel Rangel";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.20
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } }
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", gap: "2px", justifyContent: "center" }}
        >
          {name.split("").map((char, idx) => (
            <motion.span
              key={idx}
              variants={letterVariants}
              style={{ display: "inline-block", color: "#fff", marginBottom: '-3rem' }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
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