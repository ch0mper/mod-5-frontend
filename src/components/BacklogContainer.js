import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_BACKLOG, MOVE_TO_MAINLIST } from '../state/types'
import ListItem from './ListItem';
// import CreateMainListItem from './CreateMainListItem';

class BacklogContainer extends Component {

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.isCompleted-b.isCompleted});
    return this.props.tasks.map( task => (
      < ListItem task={task} toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, UPDATE_BACKLOG)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_BACKLOG)}
      deleteTask={() => this.props.deleteTask(task._id)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_MAINLIST)}/>
    ))
  }

  render() {
    return(
      <div>
        <h3>backlog</h3>
        { this.mapTasks() }
     </div>
   );
  }
};

export default connect(null, actions)(BacklogContainer);
