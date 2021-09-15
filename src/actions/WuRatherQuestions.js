/*
    *
    * WuRatherQuestions.js
    * Fills the redux store with  questions data
    * 
*/


/** Imports */

import { addQuesToUser } from "./WuRatherUsers";
import { saveQuestion } from "../utilities/API";


/**Export const to be retrieved in the reducers */

export const RECV_QUESTIONS = 'RECV_QUESTIONS';
export const ADD_ANS_TO_QUESTION = 'ADD_ANS_TO_QUESTION';
export const ADD_QUES = 'ADD_QUES';


/** Receive Questions */


export function receiveQuestions(questions) {
    return {
        type: RECV_QUESTIONS,
        questions
    };
}


/** Adding Answer after receiving question */


export function addAnsToQuestion( authUser, qid, answer){
        /** return must be in same order to match the state 
         *  meaning that the function order (authUser, qid, answer)
         * mustmatch the return statement in {authUser, qid, answer}
         * 
        */
    return {
        type : ADD_ANS_TO_QUESTION,
        authUser,
        qid,
        answer 
    };
}



/**Add Questions */



function addQues(question){
    return {
        type: ADD_QUES,
        question
        
    }
}


/** Handle Queries for Saved Questions Questions */


export function handleSavedQues(optionOneText, optionTwoText, author) {
    return dispatch => {
        //Disptach added 
        return saveQuestion({optionOneText, optionTwoText, author}).then(
            question=>{
                dispatch(addQues(question));
                dispatch(addQuesToUser(question));

            }
        )
    }
}





