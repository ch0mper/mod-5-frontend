import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import history from './state/history'

import Index from './components/Index'
import { Welcome } from './components/Welcome';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/today" render={() => (
              !localStorage.token ? <Redirect to="/"/> : <Home/>
            )}/>
            <Route exact path="/" render={() => (
              localStorage.token ? <Redirect to="/today"/> : <Index/>
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
