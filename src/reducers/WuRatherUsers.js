

/** Import actions */

import { RECV_USERS, ADD_ANS_TO_USER, ADD_QUES_TO_USER } from "../actions/WuRatherUsers";


export default function WuRatherUsers(state = {}, action) {
    switch (action.type) {


        /* CASE 1 : RECV_USERS  */

        case RECV_USERS:
            
            return {
                ...state,
                ...action.users,
            };

        /* CASE 2: ADD_ANS_TO_USER */

        case ADD_ANS_TO_USER:
            const { qid, answer, authUser } = action;
            return {
                ...state,
                [authUser]: {
                    ...state[authUser],
                    answers: {
                        ...state[authUser].answers,
                        [qid]: answer
                    }
                }
            }


        /* CASE 3 : ADD_QUES_TO_USER */


        case ADD_QUES_TO_USER:
            const { author, id } = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            }


        default:
            return state;


    }
}