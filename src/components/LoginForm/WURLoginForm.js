
/* 
    *   Components Structure 
    * --------------------------
    * //App --> WuRather App Container
    *    //Segment  --> WuRather Content Wrapper
    *        //Header  --> View Title
    *        //GRID  --> Formats all Content 
    *        //FORM  --> DropDown USERAccounts and Login Button
    * ------------------------------------------------------------
*/


/** Imports */


import {Dropdown} 
    from 'semantic-ui-react';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './WURLoginForm.css'

/** Actions **/


import { setAuthUser } from '../../actions/WuRatherAuthUser';



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class WURLogin extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return React.createElement("div", {
      className: "WUR-LogIn-Info-Connected"
    }, React.createElement(Fragment, null, 
        React.createElement(WURLogInInfo, {
      form: React.createElement(WURConnected, null)
    })));
  }

}
/**LogInGrid */


const WURLogInInfo = ({
  image,
  form
}) => React.createElement("div", null, 
React.createElement("div", {
  className: "WUR-Login-Container"
}, image, React.createElement("br", null), form));


/** WuRatherLoginForm */


class WURLoginForm extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: " "
    });

    _defineProperty(this, "onChange", (ocs, {
      value
    }) => {
      this.setState({
        value
      });
    });

    _defineProperty(this, "handlePageSubmit", ocs => {
      ocs.preventDefault();
      let {
        setAuthUser
      } = this.props;
      let authUser = this.state.value;
      new Promise(res => {
        setTimeout(() => res(), 500);
      }).then(() => setAuthUser(authUser));
    });

    _defineProperty(this, "genDropDownInfo", () => {
      const {
        users
      } = this.props;
      return users.map(user => ({
        key: user.id,
        text: user.name,
        image: {
          avatar: true,
          src: user.avatarURL
        },
        value: user.id
      }));
    });
  }

  render() {
    const {
      value
    } = this.state;
    const disabled = value === '' ? true : false;
    return React.createElement("form", {
      onSubmit: this.handlePageSubmit
    }, React.createElement("header", null, "WUR Login Page"), 
    React.createElement("br", null), 
    React.createElement("br", null), 
    React.createElement("img", {
      alt: "icons-8-login",
      src: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-login-website-element-flatart-icons-outline-flatarticons.png"
    }), React.createElement("br", null), React.createElement("div", {
      className: "WUR-Login-Container"
    }, React.createElement("br", null), React.createElement(Dropdown, {
      className: "WUR-Login-DropDownMenu",
      placeholder: "Select A User",
      selection: true,
      options: this.genDropDownInfo(),
      onChange: this.onChange
    }), React.createElement("br", null),
    React.createElement("br", null), 
    React.createElement("br", null), 
    React.createElement("br", null), 
    React.createElement("div", {
      className: "WUR-Login-Button-Container-Center"
    }, React.createElement("button", {
      className: "WUR-Login-Button",
      content: "Login",
      disabled: disabled
    }, "Log In"))));
  }

}

/** Map State to Props with form using connect */

const WURConnected = connect(
    mappingStateToProps,
    { setAuthUser }
)(WURLoginForm);


function mappingStateToProps({ users }) {
    return {
        //users: Object.values(users)--> empty
        users: Object.values(users)
    }
}


export default WURLogin;