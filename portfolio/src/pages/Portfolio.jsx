// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import WorkoutTrackerimg from '../assets/image/WorkoutTracker2.png';
import Image1 from '../assets/image/13-orm-homework-demo-01.gif';
import Image2 from '../assets/image/12-sql-homework-video-thumbnail.png';
import Image3 from '../assets/image/Screenshot 2024-03-03 at 7.00.26 PM.png';
import Image4 from '../assets/image/Screenshot 2024-06-05 at 12.12.07 PM.png'
const projects = [
  {
    title: 'Workout Tracker',
    image: WorkoutTrackerimg,
    deployedUrl: 'https://paulrusz.github.io/Group-Project1/',
    repoUrl: 'https://github.com/emsim11/Group-Project2'
  },
  {
    title: 'sql',
    image: Image1,
    deployedUrl: "",
    repoUrl: ""
    },
    {
      title: 'orm',
      image: Image2,
      deployedUrl: "",
      repoUrl: ""
      },

      {
        title: 'schedule',
        image: Image3,
        deployedUrl: "",
        repoUrl: ""
        },
        {
          title: 'tech',
          image: Image4,
          deployedUrl: "",
          repoUrl: ""
          },
];

const Portfolio = () => {
  return (
    <section className='portfolioContainer'>
      <h2>Portfolio</h2>
    <div className='projectContainer'>

      {projects.map((project, index) => (
        <Project 
          key={index} 
          title={project.title} 
          image={project.image} 
          deployedUrl={project.deployedUrl} 
          repoUrl={project.repoUrl} 
        />
      ))}
      </div>
    </section>
  );
};

export default Portfolio;
