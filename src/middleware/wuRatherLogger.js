/*
    *
    *   Middle Ware WuRatherLogger.js
    * 
*/


/** wuratherlogger is added to debug the state of actions from  the data passed to the store */
const wuratherlogger = store => next => action => {
    console.group(action.type);
    console.log('The actions:', action);
    const returnreValue = next(action);
    console.log("The new state is: ", store.getState());
    console.groupEnd();
    return returnreValue;
};

export default wuratherlogger;