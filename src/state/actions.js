import { LOGIN, SIGNUP, LOGOUT, GET_TASKS, GET_BACKLOG, GET_DAILIES, ADD_TASK, ADD_DAILIES, UPDATE_TASK, MOVE_TO_BACKLOG, DELETE_TASK, UPDATE_BACKLOG, MOVE_TO_MAINLIST } from './types'

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

  // getTasks(userId){
  //   return function(dispatch, getState){
  //     fetch(`http://localhost:5000/api/users/${userId}/tasks`, {
  //       headers: {
  //         Authorization: `${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     })
  //     .then( res => res.json() )
  //     .then( result => {
  //       dispatch({
  //         type: GET_TASKS,
  //         payload: result
  //       })
  //     })
  //   }
  // },

  // getBacklog(userId){
  //   return function(dispatch, getState){
  //     fetch(`http://localhost:5000/api/users/${userId}/backlog`, {
  //       headers: {
  //         Authorization: `${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     })
  //     .then( res => res.json() )
  //     .then( result => {
  //       dispatch({
  //         type: GET_BACKLOG,
  //         payload: result
  //       })
  //     })
  //   }
  // },

  // getDailies(userId){
  //   return function(dispatch, getState){
  //     fetch(`http://localhost:5000/api/users/${userId}/dailies`, {
  //       headers: {
  //         Authorization: `${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     })
  //     .then( res => res.json() )
  //     .then( result => {
  //       dispatch({
  //         type: GET_DAILIES,
  //         payload: result
  //       })
  //     })
  //   }
  // },

  addTask(input, userId, recurringStatus, action_type){
    return function(dispatch, getState){
      console.log(recurringStatus);;
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
          isBacklog: false,
          isRecurring: `${recurringStatus}`, //true from daily, false from mainlist
          dateCreated: new Date(),
          dateUpdated: new Date()
        })
      })
      .then( res => res.json() )
      .then( result => {
        dispatch({
          type: action_type, //ADD_TASK or ADD_DAILIES
          payload: result
        })
      })
    }
  },

  // THIS ONE WORKS :) :) :)
  // addTask(input, userId){
  //   return function(dispatch, getState){
  //     fetch('http://localhost:5000/api/tasks',{
  //       method:'POST',
  //       headers:{
  //         Authorization: `${localStorage.getItem('token')}`,
  //         'Content-Type':'application/json',
  //         Accept: 'application/json'
  //       },
  //       body:JSON.stringify({
  //         content: input.content,
  //         userId: userId,
  //         completed: false,
  //         isPriority: false,
  //         isBacklog: false,
  //         isRecurring: false, // can this be a variable that is true if passed in from DailyList ?
  //         dateCreated: new Date(),
  //         dateUpdated: new Date()
  //       })
  //     })
  //     .then( res => res.json() )
  //     .then( result => {
  //       dispatch({
  //         type: ADD_TASK,
  //         payload: result
  //       })
  //     })
  //   }
  // },

  toggleTaskComplete(id, completedStatus, action_type){
    return function(dispatch, getState){
      fetch(`http://localhost:5000/api/tasks/${id}`,{
        method:'PATCH',
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          completed: !completedStatus,
          dateUpdated: new Date()
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
          dateUpdated: new Date()
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
          dateUpdated: new Date()
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

  // answerQuestion(option){
    //     return ({ type: 'SELECT_QUESTION', payload: option.nextQuestionID  })
    // }
}
