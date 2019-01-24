import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'
import { Button, Input } from './UI/StyledComponents'

class _Signup extends Component {

  render() {
    return (
      <div style={{'text-align':'center'}}>

      {this.props.show &&
        <div class='modal'>
        <section class='modal-main'>

        <div style={{'text-align': 'right'}}><Button onClick={this.props.handleClose}>✕</Button></div>
        <h3 style={{'margin-bottom':'1em'}}>let's get started!</h3>
        <form onSubmit={e => this.props.signup(e)} >
          <div style={{'margin-bottom':'1em'}}>
            <label>First Name </label>
            <Input name="firstNameInput" type="text" />
          </div>
          <div style={{'margin-bottom':'1em'}}>
            <label>Email </label>
            <Input name="emailInput" type="text" />
          </div>
          <div style={{'margin-bottom':'1em'}}>
            <label>Password </label>
            <Input name="passwordInput" type="password" />
          </div>
          <Button type="submit" style={{'margin-bottom':'3em'}}>I'M READY</Button>
        </form>

        </section>
        </div>
      }
      </div>
    );
  }
}

export const Signup = connect(null, actions)(_Signup)
