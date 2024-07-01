// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation  ()  {
  const tabs = ["About", "Portfolio", "Contact","Resume"]
  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabs">
      {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


   {/*} <nav>
      <ul> 
        <li><NavLink to="/aboutme" className="active">About Me</NavLink></li>
        <li><NavLink to="/portfolio" className="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="active">Contact</NavLink></li>
        <li><NavLink to="/resume" className="active">Resume</NavLink></li>
      </ul>
    </nav>*/}
  

export default Navigation;
