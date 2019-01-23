import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'
import { Button, Container } from './UI/StyledComponents'

class _Login extends Component {

  render() {
    return (
      <Container>

      {this.props.show &&
        <div class='modal'>
        <section class='modal-main'>

        <div style={{'text-align': 'right'}}><Button onClick={this.props.handleClose}>✕</Button></div>
        <form onSubmit={e => this.props.login(e)} >
          <div>
            <label>Email </label>
            <input name="emailInput" type="text"/>
          </div>
          <div>
            <label>Password </label>
            <input name="passwordInput" type="password" />
          </div>
          <Button type="submit">Login</Button>
        </form>

        </section>
        </div>
      }
      </Container>
    );
  }
}

export const Login = connect(null, actions)(_Login)
