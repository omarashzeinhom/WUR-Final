/*
    *
    * WuRatherSharedData.js
    * 
*/


/*Imports */


import {getInitialData} from '../utilities/API';
import { receiveQuestions } from '../actions/WuRatherQuestions';
import { receivePageUsers } from '../actions/WuRatherUsers';


/**Handle InitialData from API */

export function handleInitialData(){
    return async dispatch=> {
        const { users, questions } = await getInitialData();
        dispatch(receiveQuestions(questions));
        dispatch(receivePageUsers(users));
    };
}