import history from './history'
import { LOGIN, SIGNUP, LOGOUT, GETTASKS } from './types'
import { initialState } from './initial'

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
    case GETTASKS:
      newState.tasks = action.payload
    break;
    // case 'SELECT_QUESTION':
    //   history.push(`/question/${action.payload}`)
    // break;
  }

  return newState
}
