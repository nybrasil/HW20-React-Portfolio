// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Workout Tracker',
    image: './image/WorkoutTracker2.png',
    deployedUrl: 'https://paulrusz.github.io/Group-Project1/',
    repoUrl: 'https://github.com/emsim11/Group-Project2'
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
