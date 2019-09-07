import React from 'react';
import PropertyCard from '../components/property-card';
import '../styles/properties.css';
import Axios from 'axios';
import Alert from '../components/alert';
import SideBar from '../components/side-bar';
import qs from 'qs';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
      alertMessage: '',
      search: '',
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

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      Axios.get(`http://localhost:3000/api/v1/PropertyListing${this.props.location.search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(error => console.log(error));
    }
  }

  buildQueryString= (operation, valueObj) => {
    const { location: { search } } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSearch = () => {
    
  }

  render() {
    return (
      <div className="page">
        <SideBar queryString={this.buildQueryString} />
        <div>
          <form
            className="search"
            onSubmit={this.handleSearch}
          >
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
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
      </div>
    );
  }
}

export default Properties;
