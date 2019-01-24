import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_BACKLOG, MOVE_TO_MAINLIST } from '../state/types'
import ListItem from './ListItem';

class BacklogContainer extends Component {

  mapTasks = () => {
    let tasks = this.props.tasks.filter(task => !task.isSuggested)
    tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    tasks.sort(function(a,b){return a.isCompleted-b.isCompleted});
    return tasks.map( task => (
      < ListItem task={task}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, MOVE_TO_MAINLIST)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_BACKLOG)}
      deleteTask={() => this.props.deleteTask(task._id)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_MAINLIST)}/>
    ))
  }

  render() {
    return(
      <div>
        <h3>Later</h3>
        { this.mapTasks() }
     </div>
   );
  }
};

const mapStateToProps = state => ({
  tasks: state.backlog
})

export default connect(mapStateToProps, actions)(BacklogContainer);
