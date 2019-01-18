import history from './history'
import { LOGIN, SIGNUP, LOGOUT, GET_TASKS, GET_BACKLOG, GET_DAILIES, ADD_TASK, ADD_DAILIES, UPDATE_TASK, MOVE_TO_BACKLOG, DELETE_TASK, UPDATE_BACKLOG, MOVE_TO_MAINLIST, UPDATE_DAILIES } from './types'

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
      history.push('/home')
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
    break;
    case MOVE_TO_BACKLOG:
      newState.backlog = [...newState.backlog, action.payload]
      newState.tasks = newState.tasks.filter(task => task._id !== action.payload._id)
    break;
    case MOVE_TO_MAINLIST:
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
  }
  return newState
}
