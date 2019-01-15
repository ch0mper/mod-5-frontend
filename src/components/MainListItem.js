import React from 'react';

const MainListItem = props => (

  <div>
  <div class='checkbox' onClick={props.onClick}>
    { props.task.completed ? '☑' : '☐' }
  </div>

  <p class='list-item'
  style={{
    textDecoration: props.task.completed ? 'line-through' : 'none'
  }}
  >
    {props.task.content}}
  </p>
  </div>
);

export default MainListItem;

// <li>{props.task.content}</li>
