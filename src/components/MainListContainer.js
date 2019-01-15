import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import MainListItem from './MainListItem';
import CreateMainListItem from './CreateMainListItem';

class MainListContainer extends Component {

  mapTasks = () => {
    this.props.tasks.sort(function(a,b){return a.completed-b.completed});
    return this.props.tasks.map( task => (
      < MainListItem task={task} onClick={() => this.props.toggleTask(task._id, task.completed)} />
    ))
  }

  render() {
    return(
      <div>
        < CreateMainListItem />
        { this.mapTasks() }
     </div>
   );
  }
};

export default connect(null, actions)(MainListContainer);
