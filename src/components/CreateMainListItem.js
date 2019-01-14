import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state/actions'
import { Button, Input } from './UI/StyledComponents'

class CreateMainListItem extends Component {

  state = {
    content: '',
  }

  inputRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state, localStorage.currentUserId)
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

// const mapDispatchToProps = dispatch => ({
//   addTask: formData => dispatch({ type: 'ADD_TASK', payload: formData })
// })

export default connect(null, actions)(CreateMainListItem);
