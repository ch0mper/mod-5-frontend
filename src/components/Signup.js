import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'
import { Button, Container } from './UI/StyledComponents'

class _Signup extends Component {

  render() {
    return (
      <Container>

      {this.props.show &&
        <div class='modal'>
        <section class='modal-main'>

        <div style={{'text-align': 'right'}}><Button onClick={this.props.handleClose}>✕</Button></div>

        <form onSubmit={e => this.props.signup(e)} >
          <div>
            <label>First Name </label>
            <input name="firstNameInput" type="text" />
          </div>
          <div>
            <label>Email </label>
            <input name="emailInput" type="text" />
          </div>
          <div>
            <label>Password </label>
            <input name="passwordInput" type="password" />
          </div>
          <Button type="submit">Let's go!</Button>
        </form>

        </section>
        </div>
      }
      </Container>
    );
  }
}

export const Signup = connect(null, actions)(_Signup)
