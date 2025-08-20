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
    link: "https://samdndhelper.netlify.app"
  },
  {
    title: "React Blog",
    description: "A modern blog built with React.",
    image: blog,
    link: "https://samreactblog.netlify.app"
  },
  {
    title: "Skintric",
    description: "A skincare tracking app.",
    image: skintric,
    link: "https://skinstric-internship-beta.vercel.app"
  },
  {
    title: "React Library App",
    description: "A library management app built with React.",
    image: library,
    link: "https://keen-cranachan-68534f.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
      <div className="grid">
        {projects.map((project, idx) => (
          <motion.a
            href={project.link}
            className="card"
            key={idx}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(56,189,248,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            rel="noopener noreferrer"
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
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#fff" }}>{project.title}</h3>
            <p style={{ color: "#cbd5e1", fontSize: "1rem" }}>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;