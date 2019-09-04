import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/side-bar.css';

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul>
        <Link to={'/?query={"city":"Leeds"}'}>Leeds </Link>
        <Link to={'/?query={"city":"Liverpool"}'}>Liverpool </Link>
        <Link to={'/?query={"city":"Manchester"}'}>Manchester </Link>
        <Link to={'/?query={"city":"Sheffield"}'}>Sheffield </Link>
      </ul>
    </div>
  );
};

export default SideBar;
