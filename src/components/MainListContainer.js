import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { ADD_TASK, UPDATE_TASK, MOVE_TO_BACKLOG, DELETE_TASK } from '../state/types'
import MainListItem from './MainListItem';
import CreateMainListItem from './CreateMainListItem';

class MainListContainer extends Component {

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.completed-b.completed});
    return this.props.tasks.map( task => (
      < MainListItem task={task} toggleComplete={() => this.props.toggleTaskComplete(task._id, task.completed, UPDATE_TASK)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_TASK)}
      deleteTask={() => this.props.deleteTask(task._id)}
      moveToBacklog={() => this.props.moveToBacklog(task._id)}/>
    ))
  }

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
