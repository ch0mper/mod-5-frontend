import React from 'react';

const MainListItem = props => (

  <li>{props.task.content}</li>

);

export default MainListItem;

// <li
//   onClick={onClick}
//   style={{
//     textDecoration: completed ? 'line-through' : 'none'
//   }}
//   >
//   {props.task.content}
// </li>
