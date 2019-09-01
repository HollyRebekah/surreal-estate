import React from 'react';
import PropertyCard from '../components/property-card';
import '../styles/properties.css';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <div className="property-page">
        {
        this.props.properties.map(property => (
          <PropertyCard
            key={property._id}
            title={property.title}
            type={property.type}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            city={property.city}
            email={property.email}
          />
        ))
        }
      </div>
    );
  }
}

export default Properties;
