// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className="header-container">
        {/*
        <section className="name-avatar">
          <img src="/src/assets/image/IMG_4135 2.JPG" height="100" alt="avatar" className="avatar" />
          <h1>Tania Bezerra</h1>
        </section>
       */}
        <nav className='navbar'>
        
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nybrasil?tab=repositories"
          >
            <span className="content is-large">Tania Bezerra</span>
          </a>
        </div>
      </nav>
      
          <ul>
          <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;  // Export the Header component