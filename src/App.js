import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import history from './state/history'

import Index from './components/Index'
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;
