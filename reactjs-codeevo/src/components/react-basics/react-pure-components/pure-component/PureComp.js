// PURE COMPONENTS IN REACT JS.
import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("PURE COMPONENT RENDER");
    return <h1>Pure Component {this.props.name}</h1>;
  }
}

export default PureComp;
