import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { Button, Input } from './UI/StyledComponents'
import { ADD_DAILIES } from '../state/types'

class CreateDailies extends Component {

  state = {
    content: '',
  }

  inputRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state, localStorage.currentUserId, 'true', ADD_DAILIES)
    console.log('hi')
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
        <form onSubmit={this.handleSubmit}>
          {/*<input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>*/}

          <Input
            ref={this.inputRef}
            type="text"
            placeholder="more things"
            onMouseEnter={() => {
              this.inputRef.current.focus()
            }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.content}
          />

          <Button type="submit">add!</Button>
       </form>
     </div>
   );
  }
};

export default connect(null, actions)(CreateDailies);
