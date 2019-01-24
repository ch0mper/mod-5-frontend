import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { Button, Input } from './UI/StyledComponents'
import { ADD_TASK } from '../state/types'


class CreateMainListItem extends Component {

  state = {
    content: '',
  }

  inputRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state, localStorage.currentUserId, 'false', ADD_TASK)
    this.setState({
      content: ''
    })
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} style={{'margin-bottom':'8px', 'margin-top':'12px'}}>

          <Input
            ref={this.inputRef}
            type="text"
            placeholder="start typing..."
            onMouseEnter={() => {
              this.inputRef.current.focus()
            }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.content}
          />

          <Button type="submit">+</Button>
       </form>
     </div>
   );
  }
};

export default connect(null, actions)(CreateMainListItem);
