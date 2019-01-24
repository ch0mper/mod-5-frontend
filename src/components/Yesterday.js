import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import { Grid, Cell } from "styled-css-grid";

import { Container } from './UI/StyledComponents'
import MainListContainer from './MainListContainer';
import DailyListContainer from './DailyListContainer';
import BacklogContainer from './BacklogContainer';
import { TodaysDate } from './TodaysDate';
import SuggestionContainer from './SuggestionContainer';
import { NavBar } from './NavBar';
import { GET_TASKS, GET_BACKLOG, GET_DAILIES, GET_ROLLOVER } from '../state/types'

class _Yesterday extends Component {

  componentDidMount(){
    this.props.getTasks(localStorage.currentUserId, 'tasks', GET_TASKS)
    this.props.getTasks(localStorage.currentUserId, 'backlog', GET_BACKLOG)
    this.props.getTasks(localStorage.currentUserId, 'dailies', GET_DAILIES)
    this.props.getTasks(localStorage.currentUserId, 'rollover', GET_ROLLOVER)
  }

  suggestTask = () => {
    let task = this.props.backlog.find(task => task.isSuggested)
    return task;
  }

  render() {
    return (
      <div>
      <Container>
      < NavBar />
        { localStorage.firstName &&
          <p class='rainbow'>hi {localStorage.firstName} !!</p>
        }
      </Container>

      <Grid flow="column" columns={3} gap="2px">
        <Cell height={2} width={1}>
          <div class='list-card'>
            < TodaysDate />
          </div>
        </Cell>
        <Cell height={2} width={1}>
          <div class='list-card'>
            { this.props.dailies &&
            < DailyListContainer />
            }
          </div>
        </Cell>
        { this.suggestTask() &&
          <Cell height={2} width={1}>
            <div class='list-card'>
            < SuggestionContainer/>
            </div>
          </Cell>
        }

        <Cell height={20} width={2}>
          <div class='list-card'>
            { this.props.tasks &&
            < MainListContainer />
            }
          </div>
        </Cell>
      </Grid>

      <Grid columns={1} gap="2px">
        <Cell width={1}>
          <div class='list-card' style={{'margin-top':'10em'}}>
            { this.props.backlog &&
            < BacklogContainer />
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
  dailies: state.dailies,
  rollover: state.rollover
})

export const Yesterday = connect(mapStateToProps, actions)(_Yesterday)
