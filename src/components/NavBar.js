import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import history from '../state/history'
import { Button, Container } from './UI/StyledComponents'
import { Grid, Cell } from "styled-css-grid";

import img from './UI/menu.png'

class _NavBar extends Component {
  render() {
    return (
      <nav onClick={() => history.push('/')} class="navbar" style={{'text-align': 'right'}}>
      <Grid columns={6}>
        <Cell width={5}>
          <div class='title'>{localStorage.firstName}'s planner</div>
        </Cell>
        <Cell width={1}>
        <Button onClick={() => this.props.logout()} style={{'margin-top':'.8em'}}>log out</Button>
        </Cell>
      </Grid>
      </nav>
    );
  }
}

export const NavBar = connect(null, actions)(_NavBar)

// <div class="dropdown">
// <button class="dropbtn">
// <img src={img} height="24" alt='loading' />
// </button>
// <div class="dropdown-content">
// <a onClick={() => history.push('/today')}>today</a>
// <a onClick={() => history.push('/demo')}>tomorrow</a>
// <a onClick={() => this.props.createTasksForDemo(localStorage.currentUserId, 'dailies')}>demo-dailies</a>
// <a onClick={() => this.props.createTasksForDemo(localStorage.currentUserId, 'rollover')}>demo-rollover</a>
// <a onClick={() => this.props.createTasksForDemo(localStorage.currentUserId, 'suggestion')}>demo-suggest</a>
// <a onClick={() => this.props.logout()}>log out</a>
// </div>
// </div>
