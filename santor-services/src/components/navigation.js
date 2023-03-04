import React from 'react';
// import {currentPage, handlePageChange}from './PortfolioContainer';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange('AboutMe')}
  
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#ContactMe"
    
  
            onClick={() => handlePageChange('ContactMe')}
            className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
      </ul>
    );
  }
  
  