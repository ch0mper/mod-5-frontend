import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import {Grid, GridCol} from 'griz';

import { Container } from './UI/StyledComponents'
import MainListContainer from './MainListContainer';
import DailyListContainer from './DailyListContainer';

class _Home extends Component {

  componentDidMount(){
    this.props.getTasks(localStorage.currentUserId)
  }

  render() {
    console.log('tasks', this.props.tasks)
    return (
      <Container>
        <h2>/home</h2>
        { localStorage.token &&
          <p>hi {localStorage.firstName} !!!!!!!!!</p>
        }
      <Grid>
        <GridCol column="48">
          <div class='list-card'>
          < DailyListContainer />
          </div>
        </GridCol>

        <GridCol column="48">
          <div class='list-card'>
            <h4>all the things</h4>
            { this.props.tasks &&
            < MainListContainer tasks={this.props.tasks} />
            }
          </div>
        </GridCol>
      </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export const Home = connect(mapStateToProps, actions)(_Home)
