/**Importing Packages */

/**Semantic UI Elements */
import {Image} from 'semantic-ui-react';

/** React, redux , PropTypes and react-router-dom */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


/*Import 
Components 
Vote , 
Results, 
Questions 
and Preview
*/

import WURQPreview from '../Votes/WURQPreview ';
import  WURQs  from '../Votes/WURVoteQuestions';
import WURVoteResults from '../Votes/WURVoteResults';


import './WURUserCard.css'



const voteTs = {
    VOTE_PREV: 'VOTE_PREV',
    VOTE_Q: 'VOTE_Q',
    VOTE_TOTAL: 'VOTE_TOTAL',
};



const VoteContent = props => {
    const {
      voteT,
      question,
      unansweredQuestions
    } = props;
  
    switch (voteT) {
      case voteTs.VOTE_PREV:
        return React.createElement(WURQPreview, {
          question: question,
          unansweredQuestions: unansweredQuestions
        });
  
      case voteTs.VOTE_Q:
        return React.createElement(WURQs, {
          question: question
        });
  
      case voteTs.VOTE_TOTAL:
        return React.createElement(WURVoteResults, {
          question: question
        });
  
      default:
        return;
    }
  };



  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  export class WURUserCard extends Component {
    render() {
      const {
        author,
        question,
        voteT,
        badPath,
        unansweredQuestions = null
      } = this.props;
  
      if (badPath === true) {
        return React.createElement(Redirect, {
          to: "/questions/bad_id"
        });
      }
  
      return React.createElement("div", {
        className: "WUR-Main-Page-UserCard-Container"
      }, React.createElement("h2", {
        className: "WUR-Main-Page-UserCard-Header"
      }, author.name, " is asking :"),
      React.createElement(Image, {
        className: "WUR-Main-Page-UserCard-Avatars",
        src: author.avatarURL,
        size: "tiny"
      }), 
      React.createElement(VoteContent, {
        voteT: voteT,
        question: question,
        unansweredQuestions: unansweredQuestions
      }));
    }
  
  }
  
  _defineProperty(WURUserCard, "propTypes", {
    question: PropTypes.object,
    author: PropTypes.object,
    voteT: PropTypes.string,
    unansweredQuestions: PropTypes.bool,
    question_id: PropTypes.string
  });

  function mappingStateToProps({
    questions,
    authUser,
    users
  }, {
    match,
    question_id
  }) {
    let question,
        author,
        voteT,
        badPath = false;
  
    if (question_id !== undefined) {
      question = questions[question_id];
      author = users[question.author];
      voteT = voteTs.VOTE_PREV;
    } else {
      const {
        question_id
      } = match.params;
      question = questions[question_id];
      const user = users[authUser];
  
      if (question === undefined) {
        badPath = true;
      } else {
        author = users[question.author];
        voteT = voteTs.VOTE_Q;
  
        if (Object.keys(user.answers).includes(question.id)) {
          voteT = voteTs.VOTE_TOTAL;
        }
      }
    }
  
    return {
      badPath,
      question,
      author,
      voteT
    };
  }


export default connect(mappingStateToProps)(WURUserCard);