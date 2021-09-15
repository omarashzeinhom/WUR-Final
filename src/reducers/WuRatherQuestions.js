/**Importing actions From WuRatherQuestions */


import {
    RECV_QUESTIONS,
    ADD_ANS_TO_QUESTION,
    ADD_QUES

} from "../actions/WuRatherQuestions";


/** Export Function WuRatherQuestions 
 *  and Return to State
 *  with votes and question.id actions
 */


export default function questions(state = {}, action) {
    switch (action.type) {
        //CASE_1: RECV_QUESTIONS
        case RECV_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        //CASE_2: ADD_ANS_TO_QUESTION
        case ADD_ANS_TO_QUESTION:
            const { authUser, qid , answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authUser)
                    }
                }

            }

        //CASE_3:ADD_QUES:
        case ADD_QUES:
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state;
    }
}