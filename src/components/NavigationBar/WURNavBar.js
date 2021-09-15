/* 
    *   Components Structure 
    * --------------------------
    * //App --> WuRather App Container
    *    // WuRatherNavBar  --> WuRather NavigationBar
    *           //WuRatherUserDataCard  --> Shows Header Content and User Avatar
    *           //WuRatherVoteQuestions --> Shows 2 Questions with a submite button
    * 
    * ------------------------------------------------------------
*/


/** React, redux and react-router-dom */

import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink as NL } from 'react-router-dom';

import img from '../../icons/wurather-main-logo.png'


/**Actions */

import { setAuthUser } from '../../actions/WuRatherAuthUser';



/**Styles */
import './WURNavBar.css'
/**Import Semantic UI Elements */
import { Menu, Image, Item} from 'semantic-ui-react';


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WURNavBar extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handlePageLogOut", c => {
      c.preventDefault();
      this.props.setAuthUser(null);
    });
  }

  render() {
    const {
      authUser,
      users
    } = this.props;
    return (
      
      // Menu Item passed here
      React.createElement(Menu, {
        pointing: true,
        color: "black",
        className: "WUR-Rather-NavBar"
      }, React.createElement(Item, {
        content: "Main",
        as: NL,
        exact: true,
        to: "/"
      }), React.createElement(Item, {
        content: "New Vote",
        as: NL,
        to: "/add"
      }), React.createElement(Item, {
        content: "LeaderBoard",
        as: NL,
        to: "/leaderboard"
      }), React.createElement("h2", null, users[authUser].name), 
      React.createElement(Image, {
        src: users[authUser].avatarURL,
        size: "tiny"
      }), React.createElement("button", {
        onClick: this.handlePageLogOut
      }, "Log Out"), 
      React.createElement(Image, {
        src: img,
        className: "App-logo",
        size: "tiny"
      }))
    );
  }

}

function mappingStateToProps({ authUser, users }) {

    return {
        authUser,
        users,
    }
}


export default connect(
    mappingStateToProps,
    { setAuthUser }
)(WURNavBar);

