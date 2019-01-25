import React, { Component } from 'react'

export class TomorrowsDate extends Component {

  getDate = () => {
    let today = new Date();
    let date = (today.getMonth() + 1) + '/' + (today.getDate() + 1) + '/' + today.getFullYear();
    return date;
  }

  render() {
    return(
      <h3 style={{'text-align': 'left', 'margin': '0em', 'margin-left': '1em'}}>
        Date: { this.getDate() }
     </h3>
   );
  }
};
