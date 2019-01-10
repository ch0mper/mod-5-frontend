import React from 'react';
import { Link } from 'react-router-dom'

const Index = () => (
  <div>
    <h1>the index</h1>
    <p>(still index) info about this project and what it does</p>
    <button><Link to='/login'>log in</Link></button>
    <button><Link to='/signup'>create account</Link></button>
    {/* {`${!params.id ? 'Create' : 'Update'}`} User */}
  </div>
);

export default Index;
