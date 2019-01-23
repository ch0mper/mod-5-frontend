import history from './history'
import { LOGIN, SIGNUP, LOGOUT, SET_LOGGEDIN, GET_TASKS, GET_BACKLOG, GET_DAILIES, GET_ROLLOVER, ADD_TASK, ADD_DAILIES, UPDATE_TASK, MOVE_TO_BACKLOG, DELETE_TASK, UPDATE_BACKLOG, MOVE_TO_MAINLIST, UPDATE_DAILIES, UPDATE_ROLLOVER, MOVE_ROLL_TO_BACKLOG, MOVE_ROLL_TO_MAIN } from './types'

export const reducer = function(currentState, action){
  const newState = { ...currentState }

  switch(action.type){
    case LOGIN:
      localStorage.currentUserId = action.payload.userId
      localStorage.firstName = action.payload.firstName
      history.push('/home')
    break;
    case SIGNUP:
      localStorage.currentUserId = action.payload.userId
      localStorage.firstName = action.payload.firstName
      history.push('/welcome')
    break;
    case LOGOUT:
      localStorage.clear()
      newState.tasks = []
      newState.dailies = []
      newState.backlog = []
      newState.firstName = ''
      history.push('/home')
    break;
    case SET_LOGGEDIN:
      newState.firstName = localStorage.firstName
    break;
    case GET_TASKS:
      newState.tasks = action.payload
    break;
    case GET_BACKLOG:
      newState.backlog = action.payload
    break;
    case GET_DAILIES:
      newState.dailies = action.payload
    break;
    case GET_ROLLOVER:
      newState.rollover = action.payload
    break;
    case ADD_TASK:
      newState.tasks = [...newState.tasks, action.payload]
    break;
    case ADD_DAILIES:
      newState.dailies = [...newState.dailies, action.payload]
    break;
    case UPDATE_TASK:
      newState.tasks = newState.tasks.map( task => {
        if (task._id !== action.payload._id) {
          return task
        }
        return {
          ...task,
          ...action.payload
        }
      })
    break;
    case DELETE_TASK:
    newState.tasks = newState.tasks.filter(task => task._id !== action.payload._id)
    newState.backlog = newState.backlog.filter(task => task._id !== action.payload._id)
    newState.dailies = newState.dailies.filter(task => task._id !== action.payload._id)
    newState.rollover = newState.rollover.filter(task => task._id !== action.payload._id)
    break;
    case MOVE_TO_BACKLOG:
      newState.backlog = [...newState.backlog, action.payload]
      newState.tasks = newState.tasks.filter(task => task._id !== action.payload._id)
    break;
    case MOVE_TO_MAINLIST:
    newState.backlog = newState.backlog.map( task => {
      if (task._id !== action.payload._id) {
        return task
      }
      return {
        ...task,
        ...action.payload
      }
    })
      newState.tasks = [...newState.tasks, action.payload]
      newState.backlog = newState.backlog.filter(task => task._id !== action.payload._id)
    break;
    case UPDATE_BACKLOG:
      newState.backlog = newState.backlog.map( task => {
        if (task._id !== action.payload._id) {
          return task
        }
        return {
          ...task,
          ...action.payload
        }
      })
      // newState.tasks = [...newState.tasks, action.payload]
      // newState.backlog = newState.backlog.filter(task => task._id !== action.payload._id)
    break;
    case UPDATE_DAILIES:
      newState.dailies = newState.dailies.map( task => {
        if (task._id !== action.payload._id) {
          return task
        }
        return {
          ...task,
          ...action.payload
        }
      })
    break;
    case UPDATE_ROLLOVER:
      newState.rollover = newState.rollover.map( task => {
        if (task._id !== action.payload._id) {
          return task
        }
        return {
          ...task,
          ...action.payload
        }
      })
      newState.tasks = [...newState.tasks, action.payload]
      newState.rollover = newState.rollover.filter(task => task._id !== action.payload._id)
    break;
    case MOVE_ROLL_TO_BACKLOG:
      newState.backlog = [...newState.backlog, action.payload]
      newState.rollover = newState.rollover.filter(task => task._id !== action.payload._id)
    break;
    case MOVE_ROLL_TO_MAIN:
      newState.tasks = [...newState.tasks, action.payload]
      newState.rollover = newState.rollover.filter(task => task._id !== action.payload._id)
    break;
  }
  return newState
}
