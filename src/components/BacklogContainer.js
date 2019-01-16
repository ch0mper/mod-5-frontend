import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_BACKLOG, MOVE_TO_MAINLIST } from '../state/types'
import MainListItem from './MainListItem';
// import CreateMainListItem from './CreateMainListItem';

class BacklogContainer extends Component {

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.completed-b.completed});
    return this.props.tasks.map( task => (
      < MainListItem task={task} toggleComplete={() => this.props.toggleTaskComplete(task._id, task.completed, UPDATE_BACKLOG)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_BACKLOG)}
      deleteTask={() => this.props.deleteTask(task._id)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_MAINLIST)}/>
    ))
  }

  render() {
    return(
      <div>
        { this.mapTasks() }
     </div>
   );
  }
};

export default connect(null, actions)(BacklogContainer);
