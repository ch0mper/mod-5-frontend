import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import { Grid, Cell } from "styled-css-grid";

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
    return (
      <div>
      <Container>
        { localStorage.token &&
          <p>hi {localStorage.firstName} !!</p>
        }
      </Container>

      <Grid flow="column" columns={3} gap="2px">
        <Cell height={1} width={1}>
          <div class='list-card'>
            < TodaysDate />
          </div>
        </Cell>
        <Cell height={19} width={1}>
          <div class='list-card'>
            <h4>dailies</h4>
            { this.props.dailies &&
            < DailyListContainer tasks={this.props.dailies} />
            }
          </div>
        </Cell>

        <Cell height={20} width={2}>
          <div class='list-card'>
            <h4>all the things</h4>
            { this.props.tasks &&
            < MainListContainer tasks={this.props.tasks} />
            }
          </div>
        </Cell>
      </Grid>

      <Grid columns={1} gap="2px">
        <Cell width={1}>
          <div class='list-card'>
            <h4>backlog</h4>
            { this.props.backlog &&
            < BacklogContainer tasks={this.props.backlog} />
            }
          </div>
        </Cell>
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
