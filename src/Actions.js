import { GET_QUESTIONS , GET_USERS , ERROR , LOGGED_USER , LOG_OUT_USER }  from './types'
import { _getQuestions , _getUsers , _saveQuestionAnswer , _saveQuestion } from './_DATA'

export const loggedUser = (payload) => {
    return {
        type : LOGGED_USER,
        payload
    }
}

export const logOutUser = () => {
    return {
        type : LOG_OUT_USER,
    }
}

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


//for answering a question
export const saveQuestionThunk = (authedUser,qid,answer) => {
    return async dispatch => {
        try{
            console.log("Reached action from saveQuestionthunk")
            await _saveQuestionAnswer({authedUser,qid,answer});
            dispatch(getQuestionsThunk());
            dispatch(getUsersThunk());
        } catch (e) {
            dispatch(error(e))
        }
    }
}


//for adding a question
export const addQuestionThunk = (question) => {
    return async dispatch => {
        try{
            await _saveQuestion(question)
            dispatch(getQuestionsThunk());
            dispatch(getUsersThunk());
        } catch (e) {
            dispatch(error(e))
        }
    }
}

