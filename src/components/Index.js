import React from 'react';
import history from '../state/history'
import '../App.css'

const Index = () => (
  <div>
    <p><b>index.js: </b> info about this project and what it does</p>
    <button onClick={() => history.push('/login')} class="button">log in</button>
    <button onClick={() => history.push('/signup')} class="button">create account</button>
    {/* {`${!params.id ? 'Create' : 'Update'}`} User */}
  </div>
);

export default Index;
