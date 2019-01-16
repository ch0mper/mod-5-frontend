import React from 'react';

const MainListItem = props => (
  <div>
  <span class='checkbox' onClick={props.onClick}>
    { props.task.completed ? '☑' : '☐' }
  </span>

  <span class='list-item'
  style={{
    textDecoration: props.task.isPriority ? 'underline' : 'none',
    textDecoration: props.task.completed ? 'line-through' : 'none'
  }}
  >
    {props.task.content}
  <div class="dropdown-content">
    <div onClick={() => console.log('clicked')}>priority</div>
    <div>move to backlog</div>
    <div>edit</div>
    <div>delete</div>
  </div>
  </span>

  </div>
);

export default MainListItem;
