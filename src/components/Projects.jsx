import React from "react";
import dnd from "../assets/dnd helper.png";
import blog from "../assets/react blog.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>
        Here are some of the <span className="green">Projects</span> I have been
        working on
      </h2>
      <div className="project__box">
        <div className="project__card">
          <div className="project__link-topright">
            <a
              href="https://samdndhelper.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="green click">View Live</span>
            </a>
          </div>
          <h3>Dnd Helper</h3>
          <p>A website to assist dungeon and dragon players.</p>
          <img
            src={dnd}
            alt="Dnd Helper screenshot"
            className="project__image"
          />
        </div>
      </div>
      <div className="project__box">
        <div className="project__card">
          <div className="project__link-topright">
            <a
              href="https://samreactblog.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="green click">View Live</span>
            </a>
          </div>
          <h3>Simple React Blog</h3>
          <p>
            Simple blog created with React and Firebase where users can add
            articles.
          </p>
          <img
            src={blog}
            alt="Simple React Blog screenshot"
            className="project__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
