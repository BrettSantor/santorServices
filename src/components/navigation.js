import React from 'react';
import { Link } from 'react-router-dom';
// import {currentPage, handlePageChange}from './PortfolioContainer';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
           to={'/'}
           onClick={() => handlePageChange('/')}
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to='/portfolio'
           onClick={() => handlePageChange('/portfolio')}
            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to= '/resume'
            onClick={() => handlePageChange('/resume')}
            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to= '/contactme'
            onClick={() => handlePageChange('/contactme')}
            className={currentPage === '/contactme' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    );
  }
  
  