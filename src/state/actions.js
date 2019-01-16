import { LOGIN, SIGNUP, LOGOUT, GET_TASKS, GET_BACKLOG, ADD_TASK, UPDATE_TASK, UPDATE_BACKLOG, DELETE_TASK } from './types'

export const actions = {

  login(input){
    return function(dispatch, getState){
      input.preventDefault()
      fetch('http://localhost:5000/api/user/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          email: input.target.emailInput.value,
          password: input.target.passwordInput.value
        })
      })
      .then( res => res.json() )
      .then( result => {
        // if result.error show stuff else
        localStorage.setItem('token', result.token)
        dispatch({
          type: LOGIN,
          payload: result
        })
      })
    }
  },

  signup(input){
    return function(dispatch, getState){
      input.preventDefault()
      fetch('http://localhost:5000/api/user/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          firstName: input.target.firstNameInput.value,
          email: input.target.emailInput.value,
          password: input.target.passwordInput.value
        })
      })
      .then( res => res.json() )
      .then( result => {
        localStorage.setItem('token', result.token)
        dispatch({
          type: SIGNUP,
          payload: result
        })
      })
    }
  },

  logout(){
    return ({ type: LOGOUT })
  },

  getTasks(userId){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/users/${userId}/tasks`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: GET_TASKS,
          payload: result
        })
      })
    }
  },

  getBacklog(userId){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/users/${userId}/backlog`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: GET_BACKLOG,
          payload: result
        })
      })
    }
  },

  addTask(input, userId){
    return function(dispatch, getState){
      fetch('http://localhost:5000/api/tasks',{
        method:'POST',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          content: input.content,
          userId: userId,
          completed: false,
          isPriority: false,
          isBacklog: false
        })
      })

      .then( res => res.json() )

      .then( result => {
        dispatch({
          type: ADD_TASK,
          payload: result
        })
      })
    }
  },

  toggleTaskComplete(id, completedStatus){
    return function(dispatch, getState){

      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          completed: !completedStatus
        })
      })

      .then( res => res.json() )

      .then( result => {
        dispatch({
          type: UPDATE_TASK,
          payload: result
        })
        // below works too
        //dispatch(actions.getTasks(localStorage.currentUserId))
      })
    }
  },

  toggleTaskPriority(id, priorityStatus){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          isPriority: !priorityStatus
        })
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: UPDATE_TASK,
          payload: result
        })
      })
    }
  },

  deleteTask(id){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'DELETE',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        }
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: DELETE_TASK,
          payload: result
        })
      })
    }
  },

  moveToBacklog(id){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          isBacklog: true
        })
      })
      .then( res => res.json() )
      .then( result => {
        console.log('result from patch', result)
        dispatch({
          type: UPDATE_BACKLOG,
          payload: result
        })
      })
    }
  }

  // add more actions here

  // answerQuestion(option){
    //     return ({ type: 'SELECT_QUESTION', payload: option.nextQuestionID  })
    // }
}
