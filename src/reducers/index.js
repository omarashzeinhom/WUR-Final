/**Import Reducers */

import users from "./WuRatherUsers";
import questions from "./WuRatherQuestions";
import authUser from "./WuRatherAuthUser";

/** Redux */

import { combineReducers } from "redux";


export default combineReducers({
    authUser,
    questions,
    users,
    
});