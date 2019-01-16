import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import MainListItem from './MainListItem';
import CreateMainListItem from './CreateMainListItem';

class BacklogContainer extends Component {

  mapTasks = () => {
    return this.props.tasks.map( task => (
      < MainListItem task={task} toggleComplete={() => this.props.toggleTaskComplete(task._id, task.completed)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority)}
      deleteTask={() => this.props.deleteTask(task._id)}/>
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
