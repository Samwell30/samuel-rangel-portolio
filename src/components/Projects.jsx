import React from 'react'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project__list">
        <div className="project__card">
          <h3>Weather App</h3>
          <p>React app with live weather data using OpenWeather API.</p>
          <a href="" target="_blank" rel="noreferrer">View Live</a>
        </div>

        <div className="project__card">
          <h3>Todo List</h3>
          <p>Simple todo app with localStorage and React hooks.</p>
          <a href="" target="_blank" rel="noreferrer">View Live</a>
        </div>

      </div>
    </section>
  )
}

export default Projects