import React from 'react';

const ListItemRolledOver = props => (
  <div>

  <span class='checkbox' onClick={() => console.log('complete true and delete and re-create as mainListItem')}>
    { props.task.isCompleted ? '☑' : '☐' }
  </span>

  <span class='list-item'>
    {props.task.content}
  <div class="dropdown-content">
    <div onClick={() => console.log('this should delete and remake as MainListItem')}>move to mainlist</div>
    <div onClick={() => console.log('this should delete, and remake as backlog true item')}>move to backlog</div>
    <div onClick={props.deleteTask}>delete</div>
  </div>
  </span>

  </div>
);

export default ListItemRolledOver;
