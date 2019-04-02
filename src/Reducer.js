import { GET_QUESTIONS , GET_USERS , ERROR , LOGGED_USER , LOG_OUT_USER } from './types'

const initialState = {
  loggedInUser : "",
  users : null,
  questions :  null,
  error : null
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_USER:
      return {...state, loggedInUser : action.payload }

    case GET_QUESTIONS:
      return {...state, questions : action.payload};

    case LOG_OUT_USER:
      console.log("clearign local storage")
      return {...state, loggedInUser : ""};

    case GET_USERS:
      console.log("reached reducer fdffskfhskfhdk")
      return {...state, users : action.payload};

    case ERROR:
      return {...state, error : action.payload};

    default:
      return state;
  }
}