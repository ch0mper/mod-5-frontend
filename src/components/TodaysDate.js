import React, { Component } from 'react'

export class TodaysDate extends Component {

  getDate = () => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date;
  }

  render() {
    return(
      <div>
        Date: { this.getDate() }
     </div>
   );
  }
};
