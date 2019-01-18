import React, { Component } from 'react'

export class TodaysDate extends Component {

  getDate = () => {
    let today = new Date();
    let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
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
