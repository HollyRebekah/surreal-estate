import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/side-bar.css';

const SideBar = (props) => {
  return (
    <div className="side-bar">
      <ul>
        <div className="side-bar-title">Search by city:</div>
        <Link to={props.queryString('query', { city: 'Leeds' })} className="city-link">Leeds </Link>
        <br />
        <Link to={props.queryString('query', { city: 'Liverpool' })} className="city-link">Liverpool </Link>
        <Link to={props.queryString('query', { city: 'Manchester' })} className="city-link">Manchester </Link>
        <Link to={props.queryString('query', { city: 'Sheffield' })} className="city-link">Sheffield </Link>
        <br />
        <Link to={props.queryString('sort', { price: -1 })} className="city-link">Sort Low to High</Link>
        <br />
        <Link to={props.queryString('sort', { price: -1 })} className="city-link">Sort High to Low</Link>
      </ul>
    </div>
  );
};

export default SideBar;