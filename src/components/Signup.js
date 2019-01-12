import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'

class _Signup extends Component {
  render() {
    return (
      <div><br/>
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
          <button type="submit">Let's go!</button>
        </form>
      </div>
    );
  }
}

export const Signup = connect(null, actions)(_Signup)
