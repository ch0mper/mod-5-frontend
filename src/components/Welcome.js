import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavBar } from './NavBar';
import { Container } from './UI/StyledComponents'

class _Welcome extends Component {
  render() {
    return (
      <Container>
      < NavBar />

      { localStorage.token ?
      <div>
        <h2>welcome for new sign ups</h2>
        <p>hi {localStorage.firstName}</p>
      </div>
      : <h3>must be logged in :)</h3>
      }
      </Container>
    );
  }
}

export const Welcome = connect(null)(_Welcome)
