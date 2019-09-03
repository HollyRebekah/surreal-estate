import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/side-bar.css';

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul>
        <li>Leeds</li>
        <li>Liverpool</li>
        <li>Manchester</li>
        <li>Sheffield</li>
      </ul>
    </div>
  );
};

export default SideBar;
