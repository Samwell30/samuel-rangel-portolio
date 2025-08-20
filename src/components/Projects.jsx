import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Framer Motion.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "Design System",
    description: "Reusable UI components for modern web apps.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "Landing Page",
    description: "A sleek landing page for startups.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "#"
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