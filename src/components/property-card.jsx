import React from 'react';
import '../styles/property-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = (props) => {
  return (
    <div className="property-card">
      <div className="title">{props.title}</div>
      <div className="type">{props.type}</div>
      <div className="bathrooms">
        <FontAwesomeIcon className="text-logo" icon={faBath} /> {props.bathrooms}
      </div>
      <div className="bedrooms">
        <FontAwesomeIcon className="text-logo" icon={faBed} /> {props.bedrooms}
      </div>
      <div className="price">£{props.price}</div>
      <div className="city">{props.city}</div>
      <div className="email">{props.email}</div>
      <br />
      {props.userID && (<button>Save Property</button>)}
    </div>
  );
};

export default PropertyCard;
