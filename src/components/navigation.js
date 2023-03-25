import React from 'react';
import { Link } from 'react-router-dom';
// import {currentPage, handlePageChange}from './PortfolioContainer';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
           to={'/santorServices/'}
           onClick={() => handlePageChange('/santorServices/')}
            className={currentPage === '/santorServices/' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to='/santorServices/portfolio'
           onClick={() => handlePageChange('/santorServices/portfolio')}
            className={currentPage === '/santorServices/portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to= '/santorServices/resume'
            onClick={() => handlePageChange('/santorServices/resume')}
            className={currentPage === '/santorServices/resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to= '/santorServices/contactme'
            onClick={() => handlePageChange('/santorServices/contactme')}
            className={currentPage === '/santorServices/contactme' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    );
  }
  
  