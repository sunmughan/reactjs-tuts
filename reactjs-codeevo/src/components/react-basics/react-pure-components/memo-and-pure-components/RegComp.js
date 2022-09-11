// PURE COMPONENTS IN REACT JS
import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("REGULAR/NORMAL COMPONENT RENDER");
    return <h1>Regular Component {this.props.name}</h1>;
  }
}

export default RegComp;
