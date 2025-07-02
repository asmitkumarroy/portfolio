// src/pages/Projects.jsx
import React from 'react';
import './Projects.css';
import projectImage from '../assets/react.svg'; // Create a placeholder image

const myProjects = [
  {
    title: 'Project One',
    description: 'A brief description of the project, the technologies used, and the problems it solves.',
    image: projectImage,
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project, the technologies used, and the problems it solves.',
    image: projectImage,
    liveLink: '#',
    repoLink: '#',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;