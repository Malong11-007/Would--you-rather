import { GET_QUESTIONS , GET_USERS , ERROR } from './types'

const initialState = {
    users : null,
    questions :  null,
    error : null
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, questions : action.payload};

        case GET_USERS:
            console.log("reached reducer")
            return {...state, users : action.payload};

        case ERROR:
            return {...state, error : action.payload};

        default:
            return state;
    }
}