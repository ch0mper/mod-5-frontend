import { LOGIN, SIGNUP, LOGOUT, DELETE_TASK, UPDATE_TASK } from './types'

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
        if (result.error) {
          dispatch({
            type: 'LOGIN_ERROR', payload: result
          })
        } else {
          localStorage.setItem('token', result.token)
          dispatch({
            type: LOGIN,
            payload: result
          })
        }
      })
    }
  },

  signup(input){
    return function(dispatch, getState){
      input.preventDefault()
      let name = input.target.firstNameInput.value
      let firstNameCap = name.charAt(0).toUpperCase() + name.slice(1)
      fetch('http://localhost:5000/api/user/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          firstName: firstNameCap,
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

  getTasks(userId, typeOfTasks, action_type){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/users/${userId}/${typeOfTasks}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: action_type,
          payload: result
        })
      })
    }
  },

  getDemoTasks(userId, typeOfTasks, action_type){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/users/${userId}/demo/${typeOfTasks}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: action_type,
          payload: result
        })
      })
    }
  },

  // create demo tasks

  createTasksForDemo(userId, typeOfTasks){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/users/${userId}/demo/${typeOfTasks}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: 'GO_TO_DEMO',
          payload: result
        })
      })
    }
  },

  // app.get('/api/users/:id/demo/dailies', demo.recurringTasks)
  // app.get('/api/users/:id/demo/rollover', demo.rolledOverTasks)
  // app.get('/api/users/:id/demo/suggestion', demo.selectSuggestion)

  addTask(input, userId, recurringStatus, action_type){
    return function(dispatch, getState){
      console.log(recurringStatus, input);;
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
          isCompleted: false,
          isPriority: false,
          isBacklog: false,
          isRecurring: `${recurringStatus}`, //true from daily, false from mainlist
          streak: 0,
          suggested: 0,
          dateCreated: new Date(Date.now() - 216e5),
          dateUpdated: new Date(Date.now() - 216e5),
          simpleDateUpdated: parseInt((new Date(Date.now() - 216e5)).toISOString().slice(0,10).replace(/-/g,""))
        })
      })
      .then( res => res.json() )
      .then( result => {
        console.log(result)
        dispatch({
          type: action_type, //ADD_TASK or ADD_DAILIES
          payload: result
        })
      })
    }
  },

  updateTaskContent(id, input){
    console.log('hit action creator', id, input)
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          content: input,
          dateUpdated: new Date(Date.now() - 216e5),
          simpleDateUpdated: parseInt((new Date(Date.now() - 216e5)).toISOString().slice(0,10).replace(/-/g,""))
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

  toggleTaskComplete(id, isCompletedStatus, action_type){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          isCompleted: !isCompletedStatus,
          isBacklog: false,
          rolledOver: false,
          dateUpdated: new Date(Date.now() - 216e5),
          simpleDateUpdated: parseInt((new Date(Date.now() - 216e5)).toISOString().slice(0,10).replace(/-/g,""))
        })
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: action_type,
          payload: result
        })
        // below works too
        //dispatch(actions.getTasks(localStorage.currentUserId))
      })
    }
  },

  toggleTaskPriority(id, priorityStatus, action_type){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          isPriority: !priorityStatus,
          dateUpdated: new Date(Date.now() - 216e5),
          simpleDateUpdated: parseInt((new Date(Date.now() - 216e5)).toISOString().slice(0,10).replace(/-/g,""))
        })
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: action_type,
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

  toggleTaskBacklog(id, backlogStatus, action_type){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          isBacklog: !backlogStatus,
          rolledOver: false,
          isSuggested: false,
          dateUpdated: new Date(Date.now() - 216e5),
          simpleDateUpdated: parseInt((new Date(Date.now() - 216e5)).toISOString().slice(0,10).replace(/-/g,""))
        })
      })
      .then( res => res.json() )
      .then( result => {
        console.log('result from patch', result)
        dispatch({
          type: action_type,
          payload: result
        })
      })
    }
  }

  // add more actions here

}
