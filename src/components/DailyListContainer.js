import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainListItem from './MainListItem';
import CreateDailies from './CreateDailies';

class DailyListContainer extends Component {

  mapTasks = () => {
    return this.props.tasks.map( task => (
      < MainListItem task={task} />
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

export default connect(null, null)(DailyListContainer);
