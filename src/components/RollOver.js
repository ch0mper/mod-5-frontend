import React from 'react';
// import inlineEdit from './UI/inlineEdit'

const RollOver = props => (
  <div>
  <span class='priority-star' onClick={props.togglePriority}>
    { props.task.isPriority ? '⭑' : '⭒' }
  </span>

  <span class='checkbox' onClick={props.toggleComplete}>
    { props.task.isCompleted ? '☑' : '☐' }
  </span>

  <span class='list-item'
  style={{
    textDecoration: props.task.isCompleted ? 'line-through' : 'none'
  }}
  >
    {props.task.content}
  <div class="dropdown-content">
    { !props.task.isRecurring &&
      <div onClick={props.toggleBacklog}>{ props.task.isBacklog ? 'move to mainlist' : 'move to backlog'}</div>
    }
    <div>edit (no)</div>
    <div onClick={props.deleteTask}>delete</div>
  </div>
  </span>

  </div>
);

export default RollOver;
