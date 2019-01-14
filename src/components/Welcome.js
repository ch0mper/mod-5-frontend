import React, { Component } from 'react';
import { connect } from 'react-redux';

class _Welcome extends Component {
  render() {
    return (
      <div>
      { localStorage.token ?
      <div>
        <h2>welcome for new sign ups</h2>
        <p>hi {localStorage.firstName}</p>
      </div>
      : <h3>must be logged in :)</h3>
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName
})

export const Welcome = connect(mapStateToProps)(_Welcome)
