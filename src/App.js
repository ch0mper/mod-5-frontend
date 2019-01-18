import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import history from './state/history'

import Index from './components/Index'
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Welcome } from './components/Welcome';
import { Home } from './components/Home';
import BacklogContainer from './components/BacklogContainer';
import { NavBar } from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/home" render={() => (
              !localStorage.token ? <Redirect to="/"/> : <Home/>
            )}/>
            <Route exact path="/backlog" component={BacklogContainer} />
            <Route exact path="/" render={() => (
              localStorage.token ? <Redirect to="/home"/> : <Index/>
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
