import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import WURApp  from './App';
//import reportWebVitals from './reportWebVitals';
import middleware from './middleware';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'semantic-ui-css/semantic.min.css';

//instantiate the store and pass to provider
const store = createStore(rootReducer, middleware);
const rootElement = document.getElementById('root');




ReactDOM.render(
  //store passed to provider and wrapped app to act as a context
  <Provider store={store}>
    <WURApp  />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



