import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import history from '../state/history'
import { Button, Container } from './UI/StyledComponents'
import img from './UI/menu.png'

class _NavBar extends Component {
  render() {
    return (
      <div onClick={() => history.push('/')} class="navbar" style={{'text-align': 'right'}}>
        <Button onClick={() => this.props.logout()} style={{'margin-top':'.8em'}}>log out</Button>
        <div class="title">mod-5 project</div>
      </div>
    );
  }
}

export const NavBar = connect(null, actions)(_NavBar)
