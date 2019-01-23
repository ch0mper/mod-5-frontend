import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { UPDATE_DAILIES } from '../state/types';
import ListItem from './ListItem';

class SuggestionContainer extends Component {

  // using redux state for backlog tasks

  selectTask = () => {
    let task = this.props.tasks.find(task => task.isSuggested)
    // show the task where .isSuggested is true
    return < ListItem task={task} />
  }

  render() {
    return(
      <div>
      <h3>
        suggestion
     </h3>
     {this.selectTask()}
     </div>
   );
  }
};


const mapStateToProps = state => ({
  tasks: state.backlog
})

export default connect(mapStateToProps, actions)(SuggestionContainer);
