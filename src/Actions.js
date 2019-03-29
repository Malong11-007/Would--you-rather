import { GET_QUESTIONS , GET_USERS , ERROR } from './types'
import { _getQuestions , _getUsers } from './_DATA'

export const storeUsers = (payload) => {
    return {
        type : GET_USERS,
        payload
    }
}

export const storeQuestions = (payload) => {
    return {
        type : GET_QUESTIONS,
        payload
    }
}

export const error = (payload) => {
    return {
        type : ERROR,
        payload
    }
}

export const getUsersThunk = () => {
    return async dispatch => {
        try{
            const users = await _getUsers();
            console.log("reached action")
            dispatch(storeUsers(users));
        } catch (e) {
            dispatch(error(e))
        }
    }
}

export const getQuestionsThunk = () => {
    return async dispatch => {
        try{
            const questions = await _getQuestions();
            dispatch(storeQuestions(questions));
        } catch (e) {
            dispatch(error(e))
        }
    }
}