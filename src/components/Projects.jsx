import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
      technologies: ['React', 'Node.js', 'MongoDB', 'CSS'],
      link: '#',
      image: '🛒',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      link: '#',
      image: '✓',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and interactive maps',
      technologies: ['React', 'API Integration', 'CSS Grid', 'JavaScript'],
      link: '#',
      image: '⛅',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics',
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      link: '#',
      image: '📊',
    },
  ]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
