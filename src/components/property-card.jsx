import React from 'react';
import '../styles/property-card.css';

const PropertyCard = (props) => {
  return (
    <div className="property-card">
      <div className="title">{props.title}</div>
      <div className="type">{props.type}</div>
      <div className="bathrooms">Bathrooms: {props.bathrooms}</div>
      <div className="bedrooms">Bedrooms: {props.bedrooms}</div>
      <div className="price">£{props.price}</div>
      <div className="city">{props.city}</div>
      <div className="email">{props.email}</div>
      <br />
    </div>
  );
};

export default PropertyCard;
