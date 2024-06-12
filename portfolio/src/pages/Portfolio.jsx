// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    image: 'path/to/project1.jpg',
    deployedUrl: 'https://deployed-project1.com',
    repoUrl: 'https://github.com/nybrasil/project1'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project 
          key={index} 
          title={project.title} 
          image={project.image} 
          deployedUrl={project.deployedUrl} 
          repoUrl={project.repoUrl} 
        />
      ))}
    </section>
  );
};

export default Portfolio;
