import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'
import { Grid, Cell } from "styled-css-grid";

import MainListContainer from './MainListContainer';
import DailyListContainer from './DailyListContainer';
import BacklogContainer from './BacklogContainer';
import { TodaysDate } from './TodaysDate';
import SuggestionContainer from './SuggestionContainer';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { GET_TASKS, GET_BACKLOG, GET_DAILIES, GET_ROLLOVER } from '../state/types'
import Background from './UI/basic-af-black-coffee-wooden-table.jpg';

class _Home extends Component {

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
      <main style={{height:'100%', width:'100%'}}>
      <div style={{backgroundImage: `url(${Background})`, 'background-size':'cover', 'background-attachment':'fixed'}}>
      <div style={{'text-align':'center'}}>
      < NavBar />
      </div>
      <div style={{'padding':'20px 60px 0px 60px'}}>
      <Grid flow="column" columns={5} gap="2px">
        <Cell height={2} width={2}>
          <div class='list-card'>
            < TodaysDate />
          </div>
        </Cell>
        <Cell height={2} width={2}>
          <div class='list-card'>
            { this.props.dailies &&
            < DailyListContainer />
            }
          </div>
        </Cell>
        { this.suggestTask() &&
          <Cell height={2} width={2}>
            <div class='list-card'>
            < SuggestionContainer task={this.suggestTask()}/>
            </div>
          </Cell>
        }

        <Cell height={8} width={3}>
          <div class='list-card'>
            { this.props.tasks &&
            < MainListContainer />
            }
          </div>
        </Cell>
      </Grid>

      <Grid columns={5} gap="2px">
        <Cell width={1}></Cell>
        <Cell width={3}>
          <div class='list-card' style={{'margin-top':'2em'}}>
            { this.props.backlog &&
            < BacklogContainer />
            }
          </div>
        </Cell>
      </Grid>
      </div>
      <Footer/>
      </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  backlog: state.backlog,
  dailies: state.dailies,
  rollover: state.rollover
})

export const Home = connect(mapStateToProps, actions)(_Home)
