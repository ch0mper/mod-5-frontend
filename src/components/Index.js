import React from 'react';
import history from '../state/history'

const Index = () => (
  <div>
    <p><b>index.js: </b> info about this project and what it does</p>
    <button onClick={() => history.push('/login')} class="button">log in</button>
    <button onClick={() => history.push('/signup')} class="button">create account</button>
  </div>
);

export default Index;
