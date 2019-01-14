import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'

import MainList from './MainList';

class _Home extends Component {

  state = {
    tasks: [
      {
        "_id": "5c37aceca53b8883de19afbe",
        "content": "this is the content of task1, belongs to megan",
        "userId": "5c37aceba53b8883de19afbc",
        "__v": 0
      },
      {
        "_id": "5c37aceca53b8883de19afbf",
        "content": "another task yay, also belongs to megan",
        "userId": "5c37aceba53b8883de19afbc",
        "__v": 0
      }
    ]
  }

  componentDidMount(){
    //this.props.getTasks(this.props.userId)
    //this.testGetTasks()
  }

  mapTasks = () => {
    return this.state.tasks.map( task => (
      < MainList task={task} />
    ))}

  testGetTasks = () => {
    console.log(this.props.userId, 'is undef???')
    fetch(`http://localhost:5000/api/users/${this.props.userId}/tasks`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(tasks => this.setState({tasks}))
  }

  render() {
    return (
      <div>
        <h2>/home</h2>
        { this.props.firstName &&
          <p>hi {this.props.firstName}, {this.props.userId}</p>
        }
        <div class='list-card'>
        <h3>all the things</h3>
        { this.mapTasks() }
        <p>also include an input field with state to add more items</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName,
  userId: state.currentUserId
})

export const Home = connect(mapStateToProps, actions)(_Home)
