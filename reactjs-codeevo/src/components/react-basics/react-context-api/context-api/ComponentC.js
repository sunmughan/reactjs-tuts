// REACT JS CONTEXT API
import React, { Component } from "react";
import ComponentE from "./ComponentE";
import UserContext from "./userContext";

class ComponentC extends Component {
  // USING CONTEXT TYPE method 2 .
  static contextType = UserContext;
  render() {
    return (
      <>
        <h1>COMPONENT C</h1>
        <h4>{this.context}</h4>
        <ComponentE />
      </>
    );
  }
}

// // USING CONTEXT TYPE method 1.
// ComponentC.contextType = UserContext;

export default ComponentC;
