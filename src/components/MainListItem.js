import React from 'react';
// import inlineEdit from './UI/inlineEdit'

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
    {props.task.content} ({props.task.dateUpdated})
  <div class="dropdown-content">
    <div onClick={props.toggleBacklog}>{ props.task.isBacklog ? 'move to mainlist' : 'move to backlog'}</div>
    <div>edit</div>
    <div onClick={props.deleteTask}>delete</div>
  </div>
  </span>

  </div>
);

export default MainListItem;
