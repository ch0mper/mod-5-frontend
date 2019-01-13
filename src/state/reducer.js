import history from './history'
import { LOGIN, SIGNUP, LOGOUT, GETTASKS } from './types'

export const reducer = function(currentState, action){
  const newState = { ...currentState }

  switch(action.type){
    case LOGIN:
      newState.currentUserId = action.payload.userId
      newState.firstName = action.payload.firstName
      history.push('/home')
    break;
    case SIGNUP:
      newState.currentUserId = action.payload.userId
      newState.firstName = action.payload.firstName
      history.push('/welcome')
    break;
    case LOGOUT:
      localStorage.clear();
      newState.currentUserId = ''
      newState.firstName = ''
      history.push('/home')
    break;
    case GETTASKS:
      newState.tasks = action.payload
      console.log('reducer')
    break;
    // case 'SELECT_QUESTION':
    //   history.push(`/question/${action.payload}`)
    // break;
  }

  return newState
}
