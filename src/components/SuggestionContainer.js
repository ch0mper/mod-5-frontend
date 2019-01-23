import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'

class SuggestionContainer extends Component {

  getDate = () => {
    let today = new Date();
    let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    return date;
  }

  render() {
    return(
      <div>
      <h3>
        suggestion
     </h3>
     <p>a random selection from backlog</p>
     </div>
   );
  }
};

export default connect(null, actions)(SuggestionContainer);
