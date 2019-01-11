import history from './history'

export const reducer = function(currentState, action){
    const newState = { ...currentState }

    switch(action.type){
        case 'LOGIN':
            newState.currentUser = action.payload
            history.push('/home')
        break;
        // case 'SELECT_QUESTION':
        //     history.push(`/question/${action.payload}`)
        // break;
    }

    return newState
}
