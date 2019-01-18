import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import history from '../state/history'
import img from './UI/menu.png'
import '../navbar.css'

class _NavBar extends Component {
  render() {
    return (
      <div onClick={() => history.push('/')} class="navbar">
        <div class="dropdown">
          <button class="dropbtn">
            <img src={img} height="20" alt='loading' />
          </button>
          <div class="dropdown-content">
            <a href="/home">home</a>
            <a href="/">beep</a>
            <a onClick={() => this.props.logout()}>log out</a>
          </div>
        </div>
        <div class="title">mod-5 project</div>
      </div>
    );
  }
}

export const NavBar = connect(null, actions)(_NavBar)
