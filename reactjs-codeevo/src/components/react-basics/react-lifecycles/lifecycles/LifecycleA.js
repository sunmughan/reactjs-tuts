// COMPONENT LIFE CYCLES IN REACT JS
import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  // CONSTRUCTOR METHOD.
  constructor(props) {
    super(props);
    this.state = {
      name: "peter",
    };
    console.log("LIFECYCLE A CONSTRUCTOR");
  }

  // GET DERIVED STATE FROM PROPS METHOD.
  static getDerivedStateFromProps(props, state) {
    console.log("LIFECYCLE A GET DERIVED STATE FROM PROPS");
    return null;
  }

  // COMPONENT DID MOUNT METHOD.
  componentDidMount() {
    console.log("LIFECYCLE A COMPONENT DID MOUNT");
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

  handleStateChange = () => {
    this.setState({
      name: "peter parker",
    });
  };

  // RENDER METHOD.
  render() {
    console.log("LIFECYCLE A RENDER");
    return (
      <>
        <h1>LIFECYCLE A</h1>
        <h4>Name is {this.state.name}</h4>
        <button onClick={this.handleStateChange}>Change state</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;
