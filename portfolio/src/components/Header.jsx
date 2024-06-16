// src/components/Header.jsx

import React from 'react';


const Header = () => {
  return (
    <header>
      <section className="header-container">
        <section className="name-avatar">
          <img src="/src/assets/image/IMG_4135 2.JPG" height="100" alt="avatar" className="avatar" />
          <h1>Tania Bezerra</h1>
        </section>
        <nav>
          <ul>
          <li><a href="/about">About Me </a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;  // Export the Header component