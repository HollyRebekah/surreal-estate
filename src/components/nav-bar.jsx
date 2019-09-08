import React from 'react';
import '../styles/nav-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <FontAwesomeIcon className="text-logo"icon={faSign} />  Surreal Estate
      <ul className="nav">
        <Link to="/" className="item">View Properties </Link>
        <Link to="/add-property" className="item">Add a Property </Link>
        <FacebookLogin
          appId="3126946394100842"
          autoLoad
          fields="name,email,picture"
          callback={props.onLogin}
          cssClass="login"
        />
      </ul>

    </div>
  );
};

export default NavBar;
