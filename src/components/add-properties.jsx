import React from 'react';
import '../styles/add-property.css';

class AddProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        bedrooms: '2',
        bathrooms: '1',
        price: '£100,000',
        email: 'example@email.com',
      },
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: { ...this.state.fields, [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="add-property">
        <form onSubmit={this.handleAddProperty}>
          <input
            name="title"
            value={this.state.fields.title}
            onChange={this.handleFieldChange}
          />
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
          <input
            name="bedrooms"
            value={this.state.fields.bedrooms}
            onChange={this.handleFieldChange}
          />
          <input
            name="bathrooms"
            value={this.state.fields.bathrooms}
            onChange={this.handleFieldChange}
          />
          <input
            name="price"
            value={this.state.fields.price}
            onChange={this.handleFieldChange}
          />
          <input
            name="email"
            value={this.state.fields.email}
            onChange={this.handleFieldChange}
          />
          <button type="submit">
            <label>Add</label>
          </button>
        </form>
      </div>
    );
  }
}

export default AddProperties;
