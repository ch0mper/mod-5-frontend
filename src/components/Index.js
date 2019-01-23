import React, { Component } from 'react';
import history from '../state/history'
import { Button, Container } from './UI/StyledComponents'
import { Signup } from './Signup';
import { Login } from './Login';

class Index extends Component {

  state = {
    showSignup: false,
    showLogin: false
  };

  toggleSignup = () => {
    this.setState({ showSignup: !this.state.showSignup })
  }

  toggleLogin = () => {
    this.setState({ showLogin: !this.state.showLogin })
  }

  render() {
    return (
      <Container>

        <div onClick={() => history.push('/')} class="navbar" style={{'text-align':'right'}}>
          <Button onClick={this.toggleLogin} style={{'margin-top':'.8em'}}>login</Button>
          <div class="title">mod-5 project</div>
        </div>

        <h3>index.js: info about this project and what it does</h3>
        <Signup show={this.state.showSignup} handleClose={this.toggleSignup}/>
        <Login show={this.state.showLogin} handleClose={this.toggleLogin}/>

        <Button onClick={this.toggleSignup}>
          sign up
        </Button>

      </Container>
    )
  }
};

export default Index;
