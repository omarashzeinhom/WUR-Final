/* 
    *   Components Structure 
    * --------------------------
    * //App --> WuRather App Container
    *    // WuRatherNavBar  --> WuRather NavigationBar
    *           //wuRatherNewVote  --> Views for the Form
    *           //Form --> Submits a new Vote
    * 
    * -----------------------------------------------------------------------------------------------------
*/


import {Form, Dimmer, Loader} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './WURQuestionStyles.css'

/** Components */

import { handleSavedQues } from '../../actions/WuRatherQuestions';




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class WURNewQuestion extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      validSubmit: false,
      optionA: '',
      optionB: '',
      isLoading: false
    });

    _defineProperty(this, "handlePageChange", c => {
      this.setState({
        [c.target.id]: c.target.value
      });
    });

    _defineProperty(this, "handlePageSubmit", c => {
      this.setState({
        [c.target.id]: c.target.value
      });
      let {
        authUser,
        handleSavedQues
      } = this.props;
      let {
        optionA,
        optionB
      } = this.state;
      new Promise((res, rej) => {
        this.setState({
          isLoading: true
        });
        handleSavedQues(optionA, optionB, authUser);
        setTimeout(() => res('valid', 500));
      }).then(() => {
        this.setState({
          optionA: '',
          optionB: ''
        });
        this.setState({
          validSubmit: true
        });
      });
    });
  }

  render() {
    const disabledevent = this.state.optionA === '' || this.state.optionB === '';

    if (this.state.validSubmit === true) {
      return React.createElement(Redirect, {
        to: "/"
      });
    }

    return React.createElement(Form, {
      onSubmit: this.handlePageSubmit
    }, this.state.isLoading && 
    React.createElement(Dimmer, {
      inverted: true,
      active: true
    }, React.createElement(Loader, {
      content: "Updating Questions"
    })), React.createElement("h2", {
      className: "WUR-NewVote-Paragraph"
    }, React.createElement("em", null, "WuRather?")),
    React.createElement("input", {
      //OptionA
      className: "WUR-Option-A-Input" //Text Added before Submission
      ,
      placeholder: "Enter Option A" //Must add ID or text wont be send
      ,
      id: "optionA" // State Value to be Sent to Main
      ,
      value: this.state.optionA,
      onChange: this.handlePageChange,
      required: true
    }), React.createElement("br", null),
     React.createElement("br", null),
      React.createElement("h3", {
      className: "WUR-OR-Paragraph"
    }, "Or..."), 
    React.createElement("br", null), 
    React.createElement("br", null),
    React.createElement("input", {
      //Option B
      className: "WUR-Option-B-Input" //Text Added before Submission
      ,
      placeholder: "Enter Option B" //Must add ID or text wont be send
      ,
      id: "optionB" // State Value to be Sent to Main
      ,
      value: this.state.optionB,
      onChange: this.handlePageChange,
      required: true
    }), React.createElement("button", {
      className: "WUR-Submit-Button",
      color: "orange",
      disabled: disabledevent
    }, "Submit Question"));
  }

}

_defineProperty(WURNewQuestion, "propTypes", {
  handleSavedQues: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired
});


function mappingStateToProps({ authUser }) {
    return {
        authUser
    }
}


export default connect(mappingStateToProps, { handleSavedQues})(WURNewQuestion);