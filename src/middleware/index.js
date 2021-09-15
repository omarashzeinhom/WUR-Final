/*
    *
    *   Middle Ware WuRatherindex.js
    * 
*/





import wuratherlogger from "./wuRatherLogger";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";


export default applyMiddleware(thunk, wuratherlogger);