import history from './history'
import { LOGIN, SIGNUP, LOGOUT } from './types'

export const reducer = function(currentState, action){
  const newState = { ...currentState }

  switch(action.type){
    case LOGIN:
      newState.currentUserId = action.payload.userId
      newState.firstName = action.payload.firstName
      history.push('/home')
    break;
    // case 'SELECT_QUESTION':
    //   history.push(`/question/${action.payload}`)
    // break;
  }

  return newState
}
