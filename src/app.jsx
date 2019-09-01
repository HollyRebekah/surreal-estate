import React from 'react';
import { render } from 'react-dom';
import './styles/app.css';
import NavBar from './components/nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './components/properties';
import AddProperties from './components/add-properties';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: [],
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/PropertyListing';
    Axios.get(url)
      .then(res => {
        this.setState({
          database: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperties} />
        </Switch>
      </div>
    );
  }
}

export default App;
