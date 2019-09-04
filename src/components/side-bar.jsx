import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/side-bar.css';

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul>
        <Link to={'/?query={"city":"Leeds"}'} className="city-link">Leeds </Link>
        <Link to={'/?query={"city":"Liverpool"}'} className="city-link">Liverpool </Link>
        <Link to={'/?query={"city":"Manchester"}'} className="city-link">Manchester </Link>
        <Link to={'/?query={"city":"Sheffield"}'} className="city-link">Sheffield </Link>
      </ul>
    </div>
  );
};

export default SideBar;
