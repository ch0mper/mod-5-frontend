import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Input } from './UI/StyledComponents'

class CreateMainListItem extends Component {

  state = {
    text: '',
  }

  inputRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      text: ''
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {/*<input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>*/}

          <Input
            ref={this.inputRef}
            placeholder="more things"
            onMouseEnter={() => {
              this.inputRef.current.focus()
            }}
          />

          <Button type="submit">add!</Button>
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateMainListItem);
