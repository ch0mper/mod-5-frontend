import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'
import { Button, Input } from './UI/StyledComponents'

class _Login extends Component {

  render() {
    return (
      <div style={{'text-align':'center'}}>

      {this.props.show &&
        <div class='modal'>
        <section class='modal-main'>

        <div style={{'text-align': 'right'}}><Button onClick={this.props.handleClose}>✕</Button></div>
        <h3 style={{'margin-bottom':'1em'}}>welcome back!</h3>
        <form onSubmit={e => this.props.login(e)} >
          <div style={{'margin-bottom':'1em'}}>
            <label>Email </label>
            <Input name="emailInput" type="text"/>
          </div>
          <div style={{'margin-bottom':'1em'}}>
            <label>Password </label>
            <Input name="passwordInput" type="password" />
          </div>
          <Button type="submit" style={{'margin-bottom':'3em'}}>LET'S GO</Button>
        </form>

        {this.props.error && <p>wrong login</p>}

        </section>
        </div>
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.loginError
})

export const Login = connect(mapStateToProps, actions)(_Login)
