// PASSING MEHTODS TO PROPS(SEND DATA FROM CHILD TO PARENT COMPONENT).
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "parent",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent} />
      </>
    );
  }
}

export default ParentComponent;
