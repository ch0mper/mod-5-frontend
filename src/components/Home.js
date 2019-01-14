import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions'

import MainListContainer from './MainListContainer';

class _Home extends Component {

  componentDidMount(){
    this.props.getTasks(localStorage.currentUserId)
  }

  render() {
    console.log('tasks', this.props.tasks)
    return (
      <div>
        <h2>/home</h2>
        { localStorage.token &&
          <p>hi {localStorage.firstName} !!!!!!!!!</p>
        }
        <div class='list-card'>
        <h4>all the things</h4>
        { this.props.tasks &&
        < MainListContainer tasks={this.props.tasks} />
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export const Home = connect(mapStateToProps, actions)(_Home)
