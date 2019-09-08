import React from 'react';
import { render } from 'react-dom';
import './styles/app.css';
import NavBar from './components/nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './components/properties';
import AddProperties from './components/add-properties';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
    };
  }

  handleLogin =(response) => {
    this.setState({ userID: response.userID });
  };

  render() {
    return (
      <div>
        <NavBar onLogin={this.handleLogin} userID={this.state.userID} />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperties} />
        </Switch>
      </div>
    );
  }
}

export default App;
