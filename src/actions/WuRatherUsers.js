/*
    *
    * WuRatherUsers.js
    * Fills the redux store with  users data
    * get users which is RECV_USERS
*/


/** Imports */

import { addAnsToQuestion } from '../actions/WuRatherQuestions'
import { saveQuestionsAnswers } from '../utilities/API'


/**Exporting const to be used later on  */


export const ADD_QUES_TO_USER = 'ADD_QUES_TO_USER ';
export const RECV_USERS = 'RECV_USERS';
export const ADD_ANS_TO_USER = 'ADD_ANS_TO_USER';





/** RECV_USERS --> get_Users */


export function receivePageUsers(users) {
    return {
        type: RECV_USERS,
        users
    };
}


/** ADD_ANS_TO_USER */


function addAnsToUser(authUser, qid, answer) {
    return {
        type: ADD_ANS_TO_USER,
        authUser,
        qid,
        answer,
    }
}


/** handleSavedQAnswers */


export function handleSavedQAnswers(authUser, qid, answer ) {
    return async dispatch => {
        dispatch(addAnsToUser(authUser, qid, answer ));
        dispatch(addAnsToQuestion(authUser, qid, answer ));
        /*
            *
            * Return a warning after dispatch in handleSavedQAnswers
            * 
        */
        try {
            return saveQuestionsAnswers(authUser, qid, answer);
        } catch (c) {
            console.warn('Error in handleSavedQAnswers', c);
        }
    }
}

export default handleSavedQAnswers;



/** ADD_QUES_TO_USER */


export function addQuesToUser({  id, author }) {
    return {
        type: ADD_QUES_TO_USER,
        id,
        author
    }
}
