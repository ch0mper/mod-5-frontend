import React from 'react';

const MainListItem = props => (
  <div>
  <span class='priority-star' onClick={props.togglePriority}>
    { props.task.isPriority ? '⭑' : '⭒' }
  </span>

  <span class='checkbox' onClick={props.toggleComplete}>
    { props.task.completed ? '☑' : '☐' }
  </span>

  <span class='list-item'
  style={{
    textDecoration: props.task.completed ? 'line-through' : 'none'
  }}
  >
    {props.task.content}
  <div class="dropdown-content">
    <div onClick={props.toggleBacklog}>{ props.task.isBacklog ? 'move to mainlist' : 'move to backlog'}</div>
    <div>edit</div>
    <div onClick={props.deleteTask}>delete</div>
  </div>
  </span>

  </div>
);

export default MainListItem;
