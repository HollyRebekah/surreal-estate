import React from 'react';
import '../styles/nav-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="text-logo">
        <FontAwesomeIcon className="text-logo"icon={faSign} />  Surreal Estate
        <ul className="nav">
          <li className="item">View Properties</li>
          <li className="item">Add a Property</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
