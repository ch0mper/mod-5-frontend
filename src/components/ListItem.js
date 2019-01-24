import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';

class ListItem extends Component {

  constructor(props){
    super(props);

    this._handleFocus = this._handleFocus.bind(this);
    this._handleFocusOut = this._handleFocusOut.bind(this);
  }

  _handleFocus(text) {
    console.log('editing: ' + text);
  }

  _handleFocusOut(text) {
    console.log('updated content: ' + text);
    this.props.updateContent(this.props.task._id, text)
  }

  render() {
    return (
      <div key={this.props.task._id}>

        {(!this.props.hideComplete || !this.props.task.isCompleted) &&

        <div style={{display:'flex', 'flex-direction':'row'}}>

        { (!this.props.task.isRecurring && !this.props.task.isCompleted && !this.props.task.isSuggested) &&
          <span class='bullet' onClick={this.props.toggleBacklog}>
            { this.props.task.isBacklog ? '⤴' : '⤹' }
            <span class="tooltiptext">{ this.props.task.isBacklog ? 'move to today' : 'save for later' }</span>
          </span>
        }

        { this.props.task.isSuggested &&
          <span class='bullet' onClick={this.props.toggleBacklog}>⤹
            <span class="tooltiptext">keep for later</span>
          </span>
        }

        { this.props.task.rolledOver &&
          <span class='bullet' onClick={this.props.moveToMain}>⇃
            <span class="tooltiptext">move to today</span>
          </span>
        }

        { this.props.task.isSuggested &&
          <span class='bullet' onClick={this.props.moveToMain}>⤴
            <span class="tooltiptext">move to today</span>
          </span>
        }

        { (!this.props.task.isRecurring && !this.props.task.rolledOver && !this.props.task.isCompleted && !this.props.task.isSuggested) &&
          <span class='bullet' onClick={this.props.togglePriority}>
            { this.props.task.isPriority ? '⭑' : '⭒' }
          </span>
        }

        { !this.props.task.isSuggested &&
          <span class='bullet' onClick={this.props.toggleComplete} style={{color: this.props.task.isCompleted ? 'darkgrey' : 'black'}}>
            { this.props.task.isCompleted ? '☑' : '☐' }
          </span>
        }

        <span class='list-item'
        style={{
          textDecoration: this.props.task.isCompleted ? 'line-through' : 'none'}}>
          { !this.props.task.isRecurring && !this.props.task.isBacklog ?
            <EditableLabel text={this.props.task.content}
              onFocus={this._handleFocus}
              onFocusOut={this._handleFocusOut}/>
            : <span>{this.props.task.content}</span>
          }
        </span>
        <span style={{'margin-left':'8px'}}>
          { !!this.props.task.streak && `(✓ × ${this.props.task.streak})`}
        </span>
        <span class='delete-icon' onClick={this.props.deleteTask} style={{color: 'darkgrey'}}>
          ☒</span>
        </div>
      }
      </div>
    )
  }
};

export default ListItem;
