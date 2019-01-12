import React, { Component } from 'react';
import { connect } from 'react-redux';

class _Welcome extends Component {
  render() {
    return (
      <div>
        <h2>welcome for new sign ups</h2>
        <p>hi {this.props.firstName}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName
})

export const Welcome = connect(mapStateToProps)(_Welcome)
