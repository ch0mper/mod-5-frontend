import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'

class _Login extends Component {
  render() {
    return (
      <div><br/>
        <form onSubmit={e => this.props.login(e)} >
          <div>
            <label>Email </label>
            <input name="emailInput" type="text" />
          </div>
          <div>
            <label>Password </label>
            <input name="passwordInput" type="password" />
          </div>
          <button type="submit" class="button">Login</button>
        </form>
      </div>
    );
  }
}

export const Login = connect(null, actions)(_Login)
