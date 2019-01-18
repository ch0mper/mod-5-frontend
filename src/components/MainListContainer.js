import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_TASK, MOVE_TO_BACKLOG } from '../state/types'
import ListItem from './ListItem';
import ListItemRolledOver from './ListItemRolledOver';
import CreateMainListItem from './CreateMainListItem';

class MainListContainer extends Component {

  mapRollover = () => {
    return this.props.rollover.map( task => (
      < ListItemRolledOver task={task}
      // toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, UPDATE_TASK)}
      // togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_TASK)}
      // deleteTask={() => this.props.deleteTask(task._id)}
      // toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_BACKLOG)}
      />
    ))
  }

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.isCompleted-b.isCompleted});
    return this.props.tasks.map( task => (
      < ListItem task={task}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, UPDATE_TASK)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_TASK)}
      deleteTask={() => this.props.deleteTask(task._id)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_BACKLOG)}/>
    ))
  }

  render() {
    return(
      <div>
        <div class='list-card'>
        <h4>unfinished things from yesterday</h4>
          { this.mapRollover() }
        </div>
        < CreateMainListItem />
        { this.mapTasks() }
     </div>
   );
  }
};

export default connect(null, actions)(MainListContainer);
