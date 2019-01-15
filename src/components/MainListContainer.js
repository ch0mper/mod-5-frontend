import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import MainListItem from './MainListItem';
import CreateMainListItem from './CreateMainListItem';

// < MainListItem task={task} onClick={() => this.testToggleTask(task._id)} />

class MainListContainer extends Component {

  mapTasks = () => {
    console.log(this.props.tasks)
    return this.props.tasks.map( task => (
      < MainListItem task={task} onClick={() => this.props.toggleTask(task._id, task.completed)} />
    ))
  }

  // testToggleTask = (taskId) => {
  //   console.log('toggling...', taskId)
  //
  //   this.props.tasks.map( task => {
  //     return task._id === taskId ?
  //     { ...task, completed: !task.completed}
  //     : task
  //   })
  //   // newState.tasks.map( task => {
  //   //   return task._id === action.id ?
  //   //   { ...task, completed: !task.completed}
  //   //   : task
  //   // })
  //   // return newState
  // }

  render() {
    return(
      <div>
        < CreateMainListItem />
        { this.mapTasks() }
     </div>
   );
  }
};

export default connect(null, actions)(MainListContainer);
