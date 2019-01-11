import React, { Component } from 'react';
import { connect } from 'react-redux';

class _Home extends Component {
  render() {
    return (
      <div>
        <h2>homeeee</h2>
        { this.props.firstName &&
          <p>hi {this.props.firstName}</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName
})

export const Home = connect(mapStateToProps)(_Home)
