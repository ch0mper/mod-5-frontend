import React, { Component } from 'react';

class test extends Component {

  state = {
    isEditing: false,
    text: ''
    // this.props.tast.content
  }

  _handleFocus() {
  if(this.state.isEditing) {
      if(typeof this.props.onFocusOut === 'function') {
        this.props.onFocusOut(this.state.text);
        }
    }
    else {
      if(typeof this.props.onFocus === 'function') {
        this.props.onFocus(this.state.text);
        }
    }

    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  _handleChange() {
    this.setState({
        text: this.textInput.value,
      });
  }

  render() {

    if(this.state.isEditing) {
      return <div>
          <input type="text"
                className={this.props.inputClassName}
                ref={(input) => { this.textInput = input; }}
                value={this.state.text}
                onChange={this._handleChange}
                onBlur={this._handleFocus}
                maxLength={this.props.inputMaxLength}
                placeholder={this.props.inputPlaceHolder}
                tabIndex={this.props.inputTabIndex}
                autoFocus/>
      </div>
    }

    return (
      <div>
          <label className={this.props.labelClassName}
              onClick={this._handleFocus}
              style={{
              	fontSize: this.props.labelFontSize,
                  fontWeight: this.props.labelFontWeight,
              }}>
              {this.state.text}
          </label>
      </div>
    )
  }
};

export default test;
