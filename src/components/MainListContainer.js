import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainListItem from './MainListItem';
import CreateMainListItem from './CreateMainListItem';

class MainListContainer extends Component {

  mapTasks = () => {
    console.log(this.props.tasks)
    return this.props.tasks.map( task => (
      < MainListItem task={task} />
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

export default connect(null, null)(MainListContainer);
