import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_BACKLOG, MOVE_TO_MAINLIST } from '../state/types'
import ListItem from './ListItem';

class BacklogContainer extends Component {

  state = {
    hideComplete: false
  }

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.isCompleted-b.isCompleted});
    return this.props.tasks.map( task => (
      < ListItem task={task} hideComplete={this.state.hideComplete}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, UPDATE_BACKLOG)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_BACKLOG)}
      deleteTask={() => this.props.deleteTask(task._id)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_MAINLIST)}/>
    ))
  }

  render() {
    return(
      <div>
        <h3>backlog</h3>
        <button onClick={() => this.setState({hideComplete: !this.state.hideComplete})}>
          {this.state.hideComplete ? 'show completed' : 'hide completed'}</button>
        { this.mapTasks() }
     </div>
   );
  }
};

const mapStateToProps = state => ({
  tasks: state.backlog
})

export default connect(mapStateToProps, actions)(BacklogContainer);
