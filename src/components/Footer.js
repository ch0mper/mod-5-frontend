import React, { Component } from 'react'

export class Footer extends Component {

  getDate = () => {
    let today = new Date();
    let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    return date;
  }

  render() {
    return(
      <nav class='footer'>
        <span style={{'margin-right':'1em', color:'#b9f4d6'}}>Made with ❤️ in Houston, TX.</span>
      </nav>
   );
  }
};
