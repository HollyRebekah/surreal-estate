import React from 'react';
import '../styles/add-property.css';
import axios from 'axios';
import Alert from '../components/alert';

class AddProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        city: '',
        bedrooms: '',
        bathrooms: '',
        price: '',
        email: '',
      },
    };
  }

  handleAddProperty = (event) => {
    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      city: this.state.fields.city,
      bedrooms: this.state.fields.bedrooms,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      email: this.state.fields.email,
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: { ...this.state.fields, [event.target.name]: event.target.value },
    });
  };

  render() {
    return (
      <div className="add-property">
        <Alert />
        <form onSubmit={this.handleAddProperty}>
          <div>
          House Name
            <input
              name="title"
              placeholder="Title"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
          Property
            <select
              name="type"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div>
          Location
            <select
              name="city"
              value={this.state.fields.city}
              onChange={this.handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div>
          Bedrooms
            <input
              name="bedrooms"
              placeholder="Number of Bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
           Bathrooms
            <input
              name="bathrooms"
              placeholder="Number of Bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Price
            <input
              name="price"
              placeholder="House Price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Email
            <input
              name="email"
              placeholder="Email Address"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">
            <label>Add</label>
          </button>
        </form>
      </div>
    );
  }
}

export default AddProperties;
