import React from 'react';

const PropertyCard = (props) => {
  return (
    <div className="property-card">
      <span className="title">{props.title}</span>
      <span className="type">{props.type}</span>
      <span className="bathrooms">{props.bathrooms}</span>
      <span className="bedrooms">{props.bedrooms}</span>
      <span className="price">£{props.price}</span>
      <span className="city">{props.city}</span>
      <span className="email">{props.email}</span>
    </div>
  );
};

export default PropertyCard;
