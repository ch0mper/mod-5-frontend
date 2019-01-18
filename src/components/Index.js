import React from 'react';
import history from '../state/history'
import { Button, Container } from './UI/StyledComponents'

const Index = () => (
  <Container>
    <p><b>index.js: </b> info about this project and what it does</p>
    { localStorage.token &&
      <div><i>logged in as {localStorage.firstName}</i><br /><br /></div>
    }
    <Button onClick={() => history.push('/login')}>log in</Button>
    <Button onClick={() => history.push('/signup')}>create account</Button>
  </Container>
);

export default Index;
