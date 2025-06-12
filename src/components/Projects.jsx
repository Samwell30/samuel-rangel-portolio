import React from 'react'
import dnd from '../assets/dnd helper.png';
import blog from '../assets/react blog.png';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project__list">
        <div className="project__box">
          <div className="project__card">
            <h3>Dnd Helper</h3>
            <p>A website to assist dungeon and dragon players.</p>
            <a href="https://samdndhelper.netlify.app" target="_blank" rel="noopener noreferrer">View Live</a>
            <img src={dnd} alt="Dnd Helper screenshot" className="project__image" />
          </div>
          <div className="project__card">
            <h3>Simple React Blog</h3>
            <p>Simple blog created with React and Firebase where users can add articles.</p>
            <a href="https://samreactblog.netlify.app" target="_blank" rel="noopener noreferrer">View Live</a>
            <img src={blog} alt="Simple React Blog screenshot" className="project__image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects