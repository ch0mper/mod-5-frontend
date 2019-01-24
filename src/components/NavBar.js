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
