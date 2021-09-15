/**Semantic UI */
import { Radio} from 'semantic-ui-react';


/** Imports  */
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import handleSavedQAnswers from '../../actions/WuRatherUsers';



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class WURQs extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: ''
    });

    _defineProperty(this, "handlePageChg", (c, {
      value
    }) => this.setState({
      value
    }));

    _defineProperty(this, "handlePageSubmit", c => {
      c.preventDefault();

      if (this.state.value !== '') {
        const {
          authUser,
          question,
          handleSavedQAnswers
        } = this.props;
        handleSavedQAnswers(authUser, question.id, this.state.value);
      }
    });
  }

  render() {
    const valuedisabled = this.state.value === '' ? true : false;
    const {
      question
    } = this.props;
    return React.createElement(Fragment, null,
        React.createElement("form", {
      onSubmit: this.handlePageSubmit
    },React.createElement(Radio, {
      value: "optionOne",
      checked: this.state.value === 'optionOne',
      label: question.optionOne.text,
      onChange: this.handlePageChg
    }), React.createElement("br", null),
    React.createElement("br", null), 
    React.createElement(Radio, {
      checked: this.state.value === 'optionTwo',
      label: question.optionTwo.text,
      onChange: this.handlePageChg,
      value: "optionTwo"
    }), React.createElement("br", null), 
    React.createElement("br", null), 
    React.createElement("button", {
      disabled: valuedisabled
    }, "Submit Vote")));
  }

}

_defineProperty(WURQs, "propTypes", {
  question: PropTypes.object.isRequired,
  authUser: PropTypes.string.isRequired,
  handleSavedQAnswers: PropTypes.func.isRequired
});


 function mappingStateToProps( {authUser}, {match}) {

     return {
         authUser
     };
 }


export default connect (
    mappingStateToProps,
    {handleSavedQAnswers}
)(WURQs);