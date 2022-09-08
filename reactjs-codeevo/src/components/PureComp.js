// PURE COMPONENTS IN REACT JS.

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("PURE COMPONENT RENDER");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
