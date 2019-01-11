export const actions = {

    // answerQuestion(option){
    //     return ({ type: 'SELECT_QUESTION', payload: option.nextQuestionID  })
    // },

    login(input){
        return function(dispatch, getState){
          input.preventDefault()
          console.log('hitting the actionCreator')
          fetch('http://localhost:5000/api/user/signin',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              email: input.target.emailInput.value,
              password: input.target.passwordInput.value
            })
          })
          .then( res => res.json())
          .then( result => {
            localStorage.setItem('token', result.token)
            dispatch({
              type: 'LOGIN',
              payload: result.userId
            })
          })

        }
    }
}
