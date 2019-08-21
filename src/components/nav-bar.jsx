import React from 'react';
import '../styles/nav-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="text-logo">
        <FontAwesomeIcon className="text-logo"icon={faSign} />  Surreal Estate
        <ul className="nav">
          <Link to="/" className="item">View Properties </Link>
          <Link to="/add-property" className="item">Add a Property </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
