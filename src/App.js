import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import history from './state/history'

import Index from './components/Index'
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Welcome } from './components/Welcome';
import { Home } from './components/Home';
import Backlog from './components/Backlog';
import { NavBar } from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/backlog" component={Backlog} />
            <Route path="/" component={Index} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
