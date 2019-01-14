import history from './history'
import { LOGIN, SIGNUP, LOGOUT, GET_TASKS, ADD_TASK, TOGGLE_TASK } from './types'

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
    case ADD_TASK:
      newState.tasks = [...newState.tasks, action.payload]
    break;
    case TOGGLE_TASK:
      return newState.map(
        task =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
      )
    break;
    // case 'SELECT_QUESTION':
    //   history.push(`/question/${action.payload}`)
    // break;
  }

  return newState
}
