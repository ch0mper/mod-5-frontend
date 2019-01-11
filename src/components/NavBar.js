import React from 'react';
import '../navbar.css'

const NavBar = () => (
  <div class="navbar">
    <div class="dropdown">
      <button class="dropbtn">Menu
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">log in</a>
        <a href="#">log out</a>
        <a href="#">other</a>
      </div>
    </div>
    <div class="title">mod-5 project</div>
    {/* {`${!params.id ? 'Create' : 'Update'}`} User */}
  </div>
);

export default NavBar;
