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

  render() {
    return(
      <div>
        <h3>suggestion</h3>
        {this.selectTask()}
      </div>
   );
  }
};


const mapStateToProps = state => ({
  tasks: state.backlog
})

export default connect(mapStateToProps, actions)(SuggestionContainer);
