/* 
    *   Components Structure 
    * --------------------------
    * //App --> WuRather App Container
    *    // WuRatherNavBar  --> WuRather NavigationBar
    *           //Segemtn --> Wrapper for the content
    * -----------------------------------------------------------------------------------------------------
*/



/** React */
import React, {Component} from 'react';



export class WURVote404 extends Component {
    render() {
      return React.createElement("div", {
        className: "WUR-ERROR-404"
      }, React.createElement("br", null), 
      React.createElement("img", {
        alt: "404",
        src: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/50/000000/external-error-404-web-flatart-icons-lineal-color-flatarticons.png"
      }), React.createElement("br", null), 
      React.createElement("h2", null,
      React.createElement("strong", null, "WuRather ERROR 404 : NO MATCH FOUND")), 
      React.createElement("p", null, "Please , Get Back To The Main Menu", 
      React.createElement("br", null), "and Try to search for another vote."));
    }
  
  }
export default WURVote404;