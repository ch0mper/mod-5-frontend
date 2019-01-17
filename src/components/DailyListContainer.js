import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions';
import { UPDATE_DAILIES } from '../state/types';
import ListItem from './ListItem';
import CreateDailies from './CreateDailies';

class DailyListContainer extends Component {

  mapTasks = () => {
    return this.props.tasks.map( task => (
      < ListItem task={task}
      toggleComplete={() => this.props.toggleTaskComplete(task._id, task.completed, UPDATE_DAILIES)}
      deleteTask={() => this.props.deleteTask(task._id)}/>
    ))
  }

  render() {
    return(
      <div>
        { this.mapTasks() }
        < CreateDailies />
     </div>
   );
  }
};

export default connect(null, actions)(DailyListContainer);
