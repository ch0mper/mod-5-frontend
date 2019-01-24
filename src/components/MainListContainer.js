import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { Button } from './UI/StyledComponents'
import { UPDATE_TASK, MOVE_TO_BACKLOG, UPDATE_ROLLOVER, MOVE_ROLL_TO_MAIN, MOVE_ROLL_TO_BACKLOG } from '../state/types'
import ListItem from './ListItem';
import CreateMainListItem from './CreateMainListItem';

class MainListContainer extends Component {

  state = {
    hideComplete: false
  }

  mapRollover = () => {
    return this.props.rollover.map( task => (
      < ListItem task={task}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, UPDATE_ROLLOVER)}
      deleteTask={() => this.props.deleteTask(task._id)}
      moveToMain={() => this.props.toggleTaskBacklog(task._id, !task.isBacklog, MOVE_ROLL_TO_MAIN)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_ROLL_TO_BACKLOG)}
      />
    ))
  }

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return b.isPriority-a.isPriority});
    this.props.tasks.sort(function(a,b){return a.isCompleted-b.isCompleted});
    return this.props.tasks.map( task => (
      < ListItem task={task} hideComplete={this.state.hideComplete}
      updateContent={(id, input) => this.props.updateTaskContent(id, input)}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.isCompleted, UPDATE_TASK)}
      togglePriority={() => this.props.toggleTaskPriority(task._id, task.isPriority, UPDATE_TASK)}
      deleteTask={() => this.props.deleteTask(task._id)}
      toggleBacklog={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_BACKLOG)}/>
    ))
  }

  render() {
    return(
      <div>
        { !!this.props.rollover.length &&
          <div class='rollover-card'>
          <h3>From Yesterday</h3>
            { this.mapRollover() }
          </div>
        }
        <h3 style={{'margin-top': '1em'}}>Today</h3>

        <div style={{display:'flex', 'flex-direction':'row'}}>
        < CreateMainListItem />
        { !!this.props.tasks.length &&
          <Button style={{'margin-top':'.85em'}} onClick={() => this.setState({hideComplete: !this.state.hideComplete})}>
            {this.state.hideComplete ? 'show completed' : 'hide completed'}
            </Button>
        }
        </div>

        { !this.props.tasks.length ?
          <h3>no tasks! add more :)</h3>
        : <div>
            { this.mapTasks() }
          </div>
        }
     </div>
   );
  }
};

const mapStateToProps = state => ({
  tasks: state.tasks,
  rollover: state.rollover
})

export default connect(mapStateToProps, actions)(MainListContainer);
