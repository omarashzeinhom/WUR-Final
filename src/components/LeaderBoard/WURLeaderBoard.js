/* 
    *   Components Structure 
    * --------------------------
    * //App --> WuRather App Container
    *    // WuRatherNavBar  --> WuRather NavigationBar
    *           //WuRatherLeaderBoard  --> Displays a list of Highest three game users
    *           //WuRatherLeaderBoardCard --> Displays 1 single leaderboard card.
    * 
    * -----------------------------------------------------------------------------------------------------
*/


import PropType from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


/**Styles */
import { Image ,Form} from 'semantic-ui-react';
import './WURLeaderBoard.css'

function _defineProperty(obj, key, value) 
{ if (key in obj) 
    { Object.defineProperty(obj, key, 
        { value: value, enumerable: true, 
            configurable: true, writable: true }); } 
            else { obj[key] = value; } return obj; }

export class WURLeaderBoard extends Component {
    render() {
      let {
        wuRatherLeaderBoardData
      } = this.props;
      return React.createElement(Fragment, null, wuRatherLeaderBoardData.map(user => React.createElement(Form, {
        key: user.id,
        className: "WUR-LeaderBoard-Form"
      }, React.createElement("div", {
        className: "WUR-LeaderBoard-Container"
      },React.createElement("ul", {
        className: "WUR-LeaderBoard-Info"
      }, React.createElement(Image, {
        alt: "leader-board-avatar",
        className: "WUR-LeaderBoard-Avatar",
        src: user.avatarURL,
        size: "tiny"
      }),React.createElement("h4", null, user.name, " ", 
      React.createElement("em", null, ": Total Votes")),
      React.createElement("br", null), 
      React.createElement("li", {
        className: "WUR-List-Info"
      }, React.createElement("em", null, "Posted Questions :"), " ", user.answerVotes), 
      React.createElement("br", null), 
      React.createElement("li", {
        className: "WUR-List-Info"
      }, React.createElement("em", null, "Answered Questions :"), " ", user.questionVotes, " "), 
      React.createElement("br", null), 
      React.createElement("li", {
        className: "WUR-List-Info"
      }, React.createElement("strong", null, " Total Votes"), "  ", user.questionVotes + user.answerVotes, " "))))));
    }
  
  }
  
  _defineProperty(WURLeaderBoard, "propType", {
    wuRatherLeaderBoardData: PropType.array.isRequired
  });
function mappingStateToProps({ users }) {

    const wuRatherLeaderBoardData = Object.values(users)
        .map(user => ({
            avatarURL: user.avatarURL,
            answerVotes: Object.values(user.answers).length,
            questionVotes: user.questions.length,
            name: user.name,
            id: user.id,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((x, y) => x.total - y.total)
        .reverse()
        .slice(0, 3);
    return {
        wuRatherLeaderBoardData
    }
}


export default connect(mappingStateToProps)(WURLeaderBoard);