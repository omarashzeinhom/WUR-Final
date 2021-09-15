/* ** API.JS *** -----------
    *------------------------------------------------------------------------------
    *  API Function Wrappers 
    *  For 
    *  getStartingData --- takes in these arguments _getUsers & getQuestions
    *  saveQuestions  --- Location to format the data for the vote request
    *  saveQuestionsAnswers --- location to format data for vote request
    *   -----------------------------------------------------------------------------
*/

import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA';


export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
        ([users, questions ]) => ({
            users,
            questions
        })
    );
}


export function saveQuestion(question) {
    return _saveQuestion(question);
}




export function saveQuestionsAnswers( authUser, qid, answer) {
console.log("page info to be saved : ", {authUser, qid, answer});
    return _saveQuestionAnswer({ authUser, qid, answer });
}