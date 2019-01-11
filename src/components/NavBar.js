import React from 'react';
import history from '../state/history'
import img from './UI/menu.png'
import '../navbar.css'

const NavBar = () => (
  <div onClick={() => history.push('/')} class="navbar">
    <div class="dropdown">
      <button class="dropbtn">
        <img src={img} height="20" alt='loading' />
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="/home">home</a>
        <a href="/backlog">backlog</a>
        <a onClick={() => console.log('log out')}>log out?</a>
      </div>
    </div>
    <div class="title">mod-5 project</div>
    {/* {`${!params.id ? 'Create' : 'Update'}`} User */}
  </div>
);

export default NavBar;

// logout = () => {
//   localStorage.clear();
//   this.setState({currentUserId: null})
// }
