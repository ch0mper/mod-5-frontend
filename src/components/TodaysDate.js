import React, { Component } from 'react'

export class TodaysDate extends Component {

  getDate = () => {
    let today = new Date();
    let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    return date;
  }

  render() {
    return(
      <h3 style={{'text-align': 'left', 'margin': '0em'}}>
        date: { this.getDate() }
     </h3>
   );
  }
};
