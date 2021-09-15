

/* Imports From Packages **/

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Tab, Menu } from 'semantic-ui-react';

/* Imports From Components **/


import WURUserCard from '../UserCard/WURUserCard'


/**Styles */

import './WURMain.css'


/** WuRatherMainPage */

function _defineProperty(obj, key, value) 
{ if (key in obj) { Object.defineProperty(obj, key, 
    { value: value, enumerable: true, configurable: true, writable: true }); }
     else { obj[key] = value; } return obj; }

export class WURMain extends Component {
  //PropTypes Required
  //Render Questions and Return <Tab>Panels
  render() {
    const {
      wuRatherUserQuestionData
    } = this.props;
    return React.createElement(Tab, {
      panes: panes({
        wuRatherUserQuestionData
      }),
      className: "page-tab"
    });
  }

}

_defineProperty(WURMain, "propTypes", {
  wuRatherUserQuestionData: PropTypes.object.isRequired
});


/** Answered And UnAnswered WuRatherQuestionData with question_id */

const panes = props => {
    const {
      wuRatherUserQuestionData
    } = props;
    return [{
      menuItem: 'Unanswered Questions',
      render: () => React.createElement(Menu, {
        secondary: true,
        circular: "true"
      }, wuRatherUserQuestionData.answeredQuestions.map(question => 
        React.createElement(WURUserCard, {
        key: question.id,
        question_id: question.id,
        unansweredQuestions: true
      })))
    }, {
      menuItem: 'Answered Questions',
      render: () => React.createElement(Menu, {
        secondary: true
      }, wuRatherUserQuestionData.unansweredQuestions.map(question => React.createElement(WURUserCard, {
        key: question.id,
        question_id: question.id,
        unansweredQuestions: false
      })))
    }];
  };


/* Mapping State to Properties , with 2 objects 
 filtering question by question_id
sorting by timestamp 
*/

function mappingStateToProps({
    authUser,
    users,
    questions
  }) {
    //ErrorHere
    const pageansweredIds = Object.keys(users[authUser].answers);
    const answeredQuestions = Object.values(questions).filter(question => !pageansweredIds.includes(question.id)).sort((x, y) => y.timestamp - x.timestamp);
    const unansweredQuestions = Object.values(questions).filter(question => pageansweredIds.includes(question.id)).sort((x, y) => y.timestamp - x.timestamp);
    /**Return answered and unanswered Questions */
  
    return {
      wuRatherUserQuestionData: {
        answeredQuestions,
        unansweredQuestions
      }
    };
  }


export default connect(mappingStateToProps)(WURMain);











