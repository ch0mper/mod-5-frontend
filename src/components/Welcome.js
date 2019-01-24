import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../state/history'
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Button } from './UI/StyledComponents'
import Background from './UI/plant-on-white.jpg';

class _Welcome extends Component {
  render() {
    return (
      <div class='container' style={{backgroundImage: `url(${Background})`, 'background-size':'cover'}}>
        <div class="typewriter">Hey {localStorage.firstName}!</div>
        <p style={{'font-size':'1.5em'}}>1. Use the <span style={{'font-size':'1.1em', 'font-weight':'500'}}>TODAY</span> space to jot down anything on your mind.</p>
        <p style={{'font-size':'1.5em'}}>2. Oops, made a typo? Just click to edit.</p>
        <p style={{'font-size':'1.5em'}}>3. Choose 2 or 3 as your ⭑priority⭑ items for today.</p>
        <p style={{'font-size':'1.5em'}}>4. Something you won't get to today? Just save it for <span style={{'font-size':'1.1em', 'font-weight':'500'}}>LATER</span>.</p>
        <p style={{'font-size':'1.5em'}}>5. Add a <span style={{'font-size':'1.1em', 'font-weight':'500'}}>DAILY</span> habit, and we'll keep track of your stats.</p>
        <p style={{'font-size':'1.5em'}}>6. Come back tomorrow to focus on a new day.</p>
        <p style={{'font-size':'1.5em', 'margin-bottom':'1.4em'}}>7. We'll poke you about your later items so you don't forget.</p>
        <Button onClick={() => history.push('/today')} style={{'font-size':'1.5em'}}>Okay!</Button>
      <Footer/>
      </div>

    );
  }
}

export const Welcome = connect(null)(_Welcome)
