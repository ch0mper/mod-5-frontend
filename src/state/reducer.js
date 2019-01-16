import history from './history'
import { LOGIN, SIGNUP, LOGOUT, GET_TASKS, ADD_TASK, UPDATE_TASK } from './types'

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
  }
  return newState
}
