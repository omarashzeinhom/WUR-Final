
/** Imports */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect as Redir } from 'react-router-dom';

/** WURQPreview Component */

import './WURQuestionStyles.css'



function _defineProperty(obj, key, value) 
{ if (key in obj) { Object.defineProperty(obj, key, 
    { value: value, enumerable: true, configurable: true, writable: true }); } 
else { obj[key] = value; } return obj; }

export class WURQPreview extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      viewPoll: false
    });

    _defineProperty(this, "handlePageClick", c => {
      this.setState(prevState => ({
        viewPoll: !prevState.viewPoll
      }));
    });
  }

  render() {
    let {
      question,
      unansweredQuestions
    } = this.props;
    let WURbtnContent = unansweredQuestions === true ? 'Answer Vote' : 'Results';

    if (this.state.viewPoll === true) {
      return React.createElement(Redir, {
        push: true,
        to: `/questions/${question.id}`
      });
    }

    return React.createElement(Fragment, null, 
        React.createElement("ol", null, 
        React.createElement("li", null, question.optionOne.text), 
        React.createElement("br", null), 
        React.createElement("li", null, question.optionTwo.text)), 
        React.createElement("br", null), 
        React.createElement("button", {
      className: "WUR-Q-Preview-Button",
      onClick: this.handlePageClick,
      content: WURbtnContent
    }, "View Question"));
  }

}

_defineProperty(WURQPreview, "propTypes", {
  question: PropTypes.object.isRequired,
  unansweredQuestions: PropTypes.bool.isRequired
});


export default WURQPreview;