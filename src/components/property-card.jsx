import React from 'react';

const PropertyCard = (props) => {
  return (
    <div className="property-card">
      <span className="house-name">{props.title}</span>
      <span className="tye">{props.type}</span>
      <span className="bathrooms">{props.bathrooms}</span>
      <span className="bedrooms">{props.bedrooms}</span>
      <span className="price">{props.price}</span>
      <span className="city">{props.city}</span>
      <span className="email">{props.email}</span>
    </div>
  );
};

export default PropertyCard;
