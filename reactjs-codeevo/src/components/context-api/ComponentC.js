// REACT JS CONTEXT API.

import React, { Component } from "react";
import ComponentE from "./ComponentE";
import UserContext from "./userContext";

class ComponentC extends Component {
  // USING CONTEXT TYPE method 2 .
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h1>COMPONENT C</h1>
        <p>{this.context}</p>
        <ComponentE />
      </div>
    );
  }
}

// // USING CONTEXT TYPE method 1.
// ComponentC.contextType = UserContext;

export default ComponentC;
