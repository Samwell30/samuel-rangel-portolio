import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import blog from "../assets/react blog.png";
import dnd from "../assets/dnd helper.png";
import skintric from "../assets/skintric.png";
import library from "../assets/React Library app.png";

const projects = [
  {
    title: "DND Helper",
    description: "A tool for managing Dungeons & Dragons campaigns.",
    image: dnd,
    link: "https://samdndhelper.netlify.app",
    github: "https://github.com/Samwell30/dnd-helper.git",
  },
  {
    title: "React Blog",
    description: "A modern blog built with React.",
    image: blog,
    link: "https://samreactblog.netlify.app",
    github: "https://github.com/Samwell30/simple_react_blog.git",
  },
  {
    title: "Skintric",
    description: "A skincare tracking app.",
    image: skintric,
    link: "https://skinstric-internship-beta.vercel.app",
    github: "https://github.com/Samwell30/skinstric-internship.git",
  },
  {
    title: "React Library App",
    description: "A library management app built with React.",
    image: library,
    link: "https://keen-cranachan-68534f.netlify.app/",
    github: "https://github.com/Samwell30/React-Library-App.git",
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
    <div className="carousel-wrapper">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="carousel-card">
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "320px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ background: "#22c55e", color: "#fff", padding: "0.5rem 1.2rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}>Live</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ background: "#1e293b", color: "#22c55e", padding: "0.5rem 1.2rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, border: "2px solid #22c55e" }}>Code</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Projects;