// CLASS COMPONENT PROPS IN REACT JS
import React, { Component } from "react";

class GreetWithPropC extends Component {
  render() {
    const { name, secretName } = this.props;
    return (
      <>
        <h1>
          Hello {name} AKA {secretName}
        </h1>
        <h4>{this.props.children}</h4>
      </>
    );
  }
}

export default GreetWithPropC;
