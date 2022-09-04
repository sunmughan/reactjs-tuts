// PROPS IN REACT JS

import { Component } from "react";

class GreetWithPropC extends Component {
  constructor() {
    super();
    console.log("THE PROPS >>> ", this.props);
  }

  render() {
    const { name, secretName } = this.props;
    console.log("THE PROPS 2 >>> ", name, secretName);
    return (
      <div>
        <h4>
          Hello {this.props.name} AKA {this.props.secretName}
        </h4>
        {this.props.children}
      </div>
    );
  }
}

export default GreetWithPropC;
