// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img className= 'projectimage' src={image} alt={`${title} screenshot`} />
      <p>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Live Site</a> | 
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
};

export default Project;
