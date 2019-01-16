import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import {Grid, GridCol} from 'griz';

import { Container } from './UI/StyledComponents'
import MainListContainer from './MainListContainer';
import DailyListContainer from './DailyListContainer';
import BacklogContainer from './BacklogContainer';
import { TodaysDate } from './TodaysDate';
import { GET_TASKS, GET_BACKLOG, GET_DAILIES } from '../state/types'

class _Home extends Component {

  componentDidMount(){
    this.props.getTasks(localStorage.currentUserId, 'tasks', GET_TASKS)
    this.props.getTasks(localStorage.currentUserId, 'backlog', GET_BACKLOG)
    this.props.getTasks(localStorage.currentUserId, 'dailies', GET_DAILIES)
  }

  render() {
    console.log('tasks from home', this.props.tasks)
    console.log('backlog from home', this.props.backlog)
    console.log('dailies from home', this.props.dailies)
    return (
      <div>
      <Container>
        <h2>/home</h2>
        < TodaysDate />
        { localStorage.token &&
          <p>hi {localStorage.firstName} !!</p>
        }
      </Container>
      <Grid>
        <GridCol column="48">
          <div class='list-card'>
            <h4>dailies</h4>
            { this.props.dailies &&
            < DailyListContainer tasks={this.props.dailies} />
            }
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

        <GridCol column="48">
          <div class='list-card'>
            <h4>backlog</h4>
            { this.props.backlog &&
            < BacklogContainer tasks={this.props.backlog} />
            }
          </div>
        </GridCol>

      </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  backlog: state.backlog,
  dailies: state.dailies
})

export const Home = connect(mapStateToProps, actions)(_Home)
