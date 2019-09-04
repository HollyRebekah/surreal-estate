import React from 'react';
import { render } from 'react-dom';
import './styles/app.css';
import NavBar from './components/nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './components/properties';
import AddProperties from './components/add-properties';

class App extends React.Component {
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
