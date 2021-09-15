/* Importing npm packages and actions */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { handleInitialData } from './actions/WuRatherSharedData';


/** Importing CSS Files */

import './App.css';
import './index.css'



/** Importing Components */
import WURMain from './components/Main/WURMain';
//Login
import WURLogin from './components/LoginForm/WURLoginForm';
//NavBar
import WURNavBar from './components/NavigationBar/WURNavBar';
//UserCard
import WURUserCard from './components/UserCard/WURUserCard';
//Error404
import WURVote404 from './components/Votes/WURVote404';
//LeaderBoard
import WURLeaderBoard from './components/LeaderBoard/WURLeaderBoard';
//New Vote
import WURNewVote from './components/Votes/WURNewVote';




/*
  *
  * App.js is the Main Application Page
  * 
*/



class WURApp extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const {
      authUser
    } = this.props; // return Browser routher with authUser === null to show login page and then re direct to main page

    return React.createElement(BrowserRouter, null, 
      React.createElement("div", {
      className: "wu-rather-App"
    }, authUser === null ? React.createElement(Route, {
      render: () => 
      React.createElement(WuRatherContentGrid, null, 
        React.createElement(WURLogin, null))
    }) : ({
      /*
      When User Logs in return to exact path "/"
      */
    }, React.createElement(Fragment, null, 
      React.createElement(WURNavBar, null),
      React.createElement(WuRatherContentGrid, null, 
        React.createElement(Switch, null, 
          React.createElement(Route, {
      exact: true,
      path: "/",
      component: WURMain
    }), React.createElement(Route, {
      path: "/questions/bad_id",
      component: WURVote404
    }), React.createElement(Route, {
      path: "/questions/:question_id",
      component: WURUserCard
    }), React.createElement(Route, {
      path: "/add",
      component: WURNewVote
    }), React.createElement(Route, {
      path: "/leaderboard",
      component: WURLeaderBoard
    }), React.createElement(Route, {
      component: WURVote404
    })))))));
  }

}

/** WuRatherContent Grid with children prop added 
 *  As Well As Styles
 *  For Grid
 */


 const WuRatherContentGrid = ({
  children
}) => React.createElement(Grid, {
  padded: "vertically",
  columns: 1,
  centered: true
}, React.createElement(Grid.Row, null,
  React.createElement(Grid.Column, {
  style: {
    maxwidth: 500
  }
}, children)));


/** Mapping the State To Properties WuRatherAuthUser */


function mappingStateToProps({ authUser }) {
  return {
    authUser
  };
}


/** Export with connecting functions WuRatherApp to component */


export default connect(
  mappingStateToProps,
  { handleInitialData }
)(WURApp);



