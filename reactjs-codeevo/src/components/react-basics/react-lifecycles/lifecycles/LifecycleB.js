// COMPONENT LIFE CYCLES IN REACT JS
import React, { Component } from "react";

class LifecycleB extends Component {
  // CONSTRUCTOR METHOD.
  constructor(props) {
    super(props);

    this.state = {
      name: "peter",
    };
    console.log("Lifecycle B CONSTRUCTOR");
  }

  // GET DERIVED STATE FROM PROPS METHOD.
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B GET DERIVED STATE FROM PROPS");
    return null;
  }

  // COMPONENT DID MOUNT METHOD.
  componentDidMount() {
    console.log("Lifecycle B COMPONENT DID MOUNT");
  }

  // SHOULD COMPONENT UPDATE METHOD.
  shouldComponentUpdate() {
    console.log("LIFECYCLE A SHOULD COMPONENT UPDATE");
    return true;
  }

  // GET SNAPSHOT BEFORE UPDATE METHOD.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LIFECYCLE A GET SNAPSHOT BEFORE UPDATE");
    return null;
  }

  // COMPONENT DID UPDATE METHOD.
  componentDidUpdate() {
    console.log("LIFECYCLE A COMPONENT DID UPDATE");
  }

  // RENDER METHOD.
  render() {
    console.log("Lifecycle B RENDER");
    return <h1>Lifecycle B</h1>;
  }
}

export default LifecycleB;
