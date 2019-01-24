import React, { Component } from 'react';
import history from '../state/history'
import { Button, Container } from './UI/StyledComponents'
import { Signup } from './Signup';
import { Login } from './Login';
// import Background from './UI/samuel-zeller.jpg';
// import Background from './UI/paper-coffee-cup.jpg';
import Background from './UI/notebook-paper.jpg';
class Index extends Component {

  state = {
    showSignup: false,
    showLogin: false
  };

  toggleSignup = () => {
    this.setState({ showSignup: !this.state.showSignup })
  }

  toggleLogin = () => {
    this.setState({ showLogin: !this.state.showLogin })
  }

  render() {
    return (
      <div class='container' style={{backgroundImage: `url(${Background})`, 'background-size':'cover'}}>
        <nav onClick={() => history.push('/')} class="navbar" style={{'text-align':'right', 'background-color':'transparent'}}>
          <Button onClick={this.toggleLogin} style={{'margin-top':'.8em', 'font-weight':'bold'}}>LOGIN</Button>
        </nav>

        <div class="typewriter">a planning app.</div>

        <div style={{'font-family':'Roboto Mono', 'font-size':'1.3em','font-weight':'400', 'margin-bottom':'.5em'}}>some words about what this is and how it works </div>
        <div style={{'font-family':'Roboto Mono', 'font-size':'1.3em','font-weight':'400', 'margin-bottom':'3em'}}>with today, daily, later things blah blah.</div>
        <Signup show={this.state.showSignup} handleClose={this.toggleSignup}/>
        <Login show={this.state.showLogin} handleClose={this.toggleLogin}/>

        <Button onClick={this.toggleSignup} style={{'font-weight':'bold'}}>GET STARTED</Button>

      </div>
    )
  }
};

export default Index;

// 1. Use the TODAY space to jot down anything on your mind.
// 2. Oops, made a typo? Just click to edit.
// 3. Choose 2 or 3 as your ⭑priority⭑ items for today.
// 4. Something you won't get to today? Just save it for LATER.
// 5. Add a DAILY habit, and we'll keep track of your stats.
// 6. Come back tomorrow to focus on a new day.
// 7. We'll poke you about your later items so you don't forget.
