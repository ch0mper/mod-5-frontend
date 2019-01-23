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
import { GET_TASKS, GET_BACKLOG, GET_DAILIES, GET_ROLLOVER } from '../state/types'

class _Home extends Component {

  componentDidMount(){
    this.props.getTasks(localStorage.currentUserId, 'tasks', GET_TASKS)
    this.props.getTasks(localStorage.currentUserId, 'backlog', GET_BACKLOG)
    this.props.getTasks(localStorage.currentUserId, 'dailies', GET_DAILIES)
    this.props.getTasks(localStorage.currentUserId, 'rollover', GET_ROLLOVER)
    this.props.setLoggedin()
  }

  render() {
    return (
      <div>
      <Container>
        { this.props.firstName &&
          <p class='rainbow'>hi {this.props.firstName} !!</p>
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
        <Cell height={2} width={1}>
          <div class='list-card'>
            { !!this.props.backlog.length &&
              < SuggestionContainer/>
            }
          </div>
        </Cell>

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
  firstName: state.firstName,
  tasks: state.tasks,
  backlog: state.backlog,
  dailies: state.dailies,
  rollover: state.rollover
})

export const Home = connect(mapStateToProps, actions)(_Home)
