import React, { Component } from 'react'
import { connect } from 'react-redux'

// import MainListItem from './MainListItem';
// import CreateMainListItem from './CreateMainListItem';

class DailyListContainer extends Component {

  // mapTasks = () => {
  //   return this.props.tasks.map( task => (
  //     < MainListItem task={task} />
  //   ))
  // }

  render() {
    return(
      <div>
        <h3>hi hi hi HARD CODED</h3>
        <li>some daily things</li>
        <li>to do (hard-coded)</li>
     </div>
   );
  }
};

export default connect(null, null)(DailyListContainer);
