import React from 'react';
import PropertyCard from '../components/property-card';
import '../styles/properties.css';
import Axios from 'axios';
import Alert from '../components/alert';
import SideBar from '../components/side-bar';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/PropertyListing';
    Axios.get(url)
      .then(({ data: properties }) => {
        this.setState({
          properties,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: true,
          alertMessage: 'There is a problem with the server, please try again later',
        });
      });
  }

  render() {
    return (
      <div>
        <SideBar />
        <div className="property-page">
          {this.state.error && <Alert message={this.state.alertMessage} /> }

          {
        this.state.properties.map(property => (
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
      </div>
    );
  }
}

export default Properties;
