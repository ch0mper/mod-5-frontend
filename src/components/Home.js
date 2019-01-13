import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'

class _Home extends Component {

  componentDidMount(){
    this.props.getTasks()
  }

  render() {
    return (
      <div>
        <h2>homeeee</h2>
        { this.props.firstName &&
          <p>hi {this.props.firstName}</p>
        }
        <h3>all the things</h3>
        <p>map through user's lists and return a MainList component for each</p>
        <p>also include an input field with state to add more items</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName
})

export const Home = connect(mapStateToProps, actions)(_Home)
