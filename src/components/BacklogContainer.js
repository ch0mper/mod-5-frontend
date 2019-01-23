import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_BACKLOG, MOVE_TO_MAINLIST } from '../state/types'
import ListItem from './ListItem';

class BacklogContainer extends Component {

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.isCompleted-b.isCompleted});
    return this.props.tasks.map( task => (
      < ListItem task={task}
      updateContent={(id, input) => this.props.updateTaskContent(id, input)}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, MOVE_TO_MAINLIST)}
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

const mapStateToProps = state => ({
  tasks: state.backlog
})

export default connect(mapStateToProps, actions)(BacklogContainer);
