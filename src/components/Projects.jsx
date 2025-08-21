import React from "react";
import { motion } from "framer-motion";
import blog from '../assets/react blog.png';
import dnd from '../assets/dnd helper.png';
import skintric from '../assets/skintric.png';
import library from '../assets/React Library app.png';

const projects = [
  {
    title: "DND Helper",
    description: "A tool for managing Dungeons & Dragons campaigns.",
    image: dnd,
    link: "https://samdndhelper.netlify.app",
    github: "https://github.com/Samwell30/dnd-helper.git"
  },
  {
    title: "React Blog",
    description: "A modern blog built with React.",
    image: blog,
    link: "https://samreactblog.netlify.app",
    github: "https://github.com/Samwell30/simple_react_blog.git"
  },
  {
    title: "Skintric",
    description: "A skincare tracking app.",
    image: skintric,
    link: "https://skinstric-internship-beta.vercel.app",
    github: "https://github.com/Samwell30/skinstric-internship.git"
  },
  {
    title: "React Library App",
    description: "A library management app built with React.",
    image: library,
    link: "https://keen-cranachan-68534f.netlify.app/",
    github: "https://github.com/Samwell30/React-Library-App.git"
  }
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
      <motion.div
        className="grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            className="card"
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(56,189,248,0.15)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ position: "relative" }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1rem"
              }}
            />
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#fff", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {project.title}
              <span style={{ fontSize: "1.2rem", color: "#38bdf8" }} aria-label="External Link" title="Live Demo">↗</span>
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "1rem" }}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "#166534",
                color: "#fff",
                fontSize: "0.85rem",
                padding: "0.25rem 0.7rem",
                borderRadius: "6px",
                fontWeight: 500,
                boxShadow: "0 2px 8px rgba(22,101,52,0.15)",
                letterSpacing: "0.5px",
                textDecoration: "none"
              }}
              aria-label="Live Demo"
              title="Live Demo"
            >Live Demo ↗</a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                background: "#0f172a",
                color: "#38bdf8",
                fontSize: "1.1rem",
                padding: "0.22rem 0.7rem",
                borderRadius: "6px",
                fontWeight: 500,
                boxShadow: "0 2px 8px rgba(15,23,42,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                textDecoration: "none"
              }}
              aria-label="View Source Code"
              title="View Source Code"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 19v3" /></svg>
              Code
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;