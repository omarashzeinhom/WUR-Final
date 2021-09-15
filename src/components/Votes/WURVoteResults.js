/* 
    *   Components Structure 
    * --------------------------
    * //App --> WuRather App Container
    *    // WuRatherNavBar  --> WuRather NavigationBar
    *           //WuRatherUserDataCard  --> Shows Header Content and User Avatar
    *           //WuRatherVoteResults.js --> Shows Options and Question with # Percentage and # No of Votes
    * 
    * -----------------------------------------------------------------------------------------------------
*/

/**Semantic UI */


import { Progress } from 'semantic-ui-react';


/**Imports from Libararies  */

import PropTypes from 'prop-types';


import { connect } from 'react-redux';


import React, { Component} from 'react';


import { withRouter } from 'react-router';








function _defineProperty(obj, key, value) 
{ if (key in obj)
     { Object.defineProperty(obj, key, {
          value: value, enumerable: true, configurable: true, writable: true }); } 
          else { obj[key] = value; } return obj; }

export class WURVoteResults extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handlePageClick", () => {
      this.props.history.push('/');
    });
  }

  render() {
    //Retrieve Properites of User and Question
    let {
      user,
      question
    } = this.props; //Option A , B Votes Length

    let optionAVotes = question.optionOne.votes.length;
    let optionBVotes = question.optionTwo.votes.length;
    let totalVotes = optionAVotes + optionBVotes; // Single Vote done by User

    let userSingleVote = user.answers[question.id];
    return React.createElement("div", {
      className: "WUR-Voting-Results"
    }, React.createElement("header", {
      className: "WUR-Voting-Results-Header"
    }, "Voting Results"),
    React.createElement("br", null), 
    React.createElement("br", null), 
    React.createElement("div", null, userSingleVote === 'optionOne', 
    React.createElement("p", null, question.optionOne.text), 
    React.createElement(Progress, {
      percent: optionAVotes / totalVotes * 100 * 1.00,
      progress: true
    }, optionAVotes, "out of ", totalVotes, " votes")), userSingleVote === 'optionTwo', 
    React.createElement("p", null, question.optionTwo.text), 
    React.createElement(Progress, {
      percent: optionBVotes / totalVotes * 100 * 1.00,
      progress: true
    }, optionBVotes, " out of ", totalVotes, " votes"), 
    React.createElement("br", null), 
    React.createElement("button", {
      onClick: this.handlePageClick
    }, "GoBack"));
  }

}

_defineProperty(WURVoteResults, "propTypes", {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
});

function mappingStateToProps({ authUser, users }) {
    const user = users[authUser]
    return {
        user
    }
}



export default withRouter(connect(mappingStateToProps)(WURVoteResults));