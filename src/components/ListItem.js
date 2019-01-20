import React from 'react';
// import inlineEdit from './UI/inlineEdit'

const ListItem = props => (

  (!props.hideComplete || !props.task.isCompleted) &&

  <div>

  { (!props.task.isRecurring && !props.task.isCompleted) &&
    <span class='bullet' onClick={props.toggleBacklog}>
      { props.task.isBacklog ? '⤴' : '⤹' }
      <span class="tooltiptext">{ props.task.isBacklog ? 'move to main' : 'move to backlog' }</span>
    </span>
  }

  { props.task.rolledOver &&
    <span class='bullet' onClick={props.moveToMain}>⇃
      <span class="tooltiptext">move to main list</span>
    </span>
  }

  { (!props.task.isRecurring && !props.task.rolledOver && !props.task.isCompleted) &&
    <span class='bullet' onClick={props.togglePriority}>
      { props.task.isPriority ? '⭑' : '⭒' }
    </span>
  }

  <span class='bullet' onClick={props.toggleComplete} style={{color: props.task.isCompleted ? 'lightgrey' : 'black'}}>
    { props.task.isCompleted ? '☑' : '☐' }
  </span>

  <span class='list-item'
  style={{
    textDecoration: props.task.isCompleted ? 'line-through' : 'none', color: props.task.isCompleted ? 'lightgrey' : 'black'}}>
    {props.task.content} { !!props.task.streak && ` (${props.task.streak})`}
  </span>
  <span class='delete-icon' onClick={props.deleteTask} style={{color: props.task.isCompleted ? 'lightgrey' : 'black'}}>
    ☒</span>
  </div>
);

export default ListItem;
