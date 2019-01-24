import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { MOVE_TO_MAINLIST, UPDATE_BACKLOG } from '../state/types';
import ListItem from './ListItem';

class SuggestionContainer extends Component {

  selectTask = () => {
    let task = this.props.tasks.find(task => task.isSuggested) // show the task where .isSuggested is true
    return < ListItem task={task}
    deleteTask={() => this.props.deleteTask(task._id)}
    // move to main will toggle backlog to false, suggested to false, reducer: add to state.tasks, remove from state.backlog
    moveToMain={() => this.props.toggleTaskBacklog(task._id, task.isBacklog, MOVE_TO_MAINLIST)}
    // keep on backlog will toggle suggested to false, reducer update state.backlog
    toggleBacklog={() => this.props.toggleTaskBacklog(task._id, !task.isBacklog, UPDATE_BACKLOG)}
    />
  }

  showDate = (task) => {
    let day = this.props.task.simpleDateUpdated + ''
    let date;
    day[4] === '0'
    ? date = `${day.slice(5, 6)}/${day.slice(6)}`
    : date = `${day.slice(4, 6)}/${day.slice(6)}`
    return date
  }

  render() {
    return(
      <div>
        <h3>Just Try It!</h3>
        <p style={{'margin-left':'1em', 'font-style':'italic'}}>You saved this on {this.showDate(this.props.task)}... try it today?</p>
        {this.selectTask()}
      </div>
   );
  }
};


const mapStateToProps = state => ({
  tasks: state.backlog
})

export default connect(mapStateToProps, actions)(SuggestionContainer);
