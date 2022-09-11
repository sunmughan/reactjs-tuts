// PURE COMPONENTS IN REACT JS
import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "../pure-component/PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Peter",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Peter" });
    }, 2000);
  }

  // render() {
  //   console.log(
  //     "*********************PARENT COMPONENT RENDER*********************"
  //   );
  //   return (
  //     <>
  //       <h1>Parent Component</h1>
  //       <PureComp name={this.state.name} />
  //       <RegComp name={this.state.name} />
  //     </>
  //   );
  // }

  render() {
    console.log(
      "*********************PARENT COMPONENT RENDER*********************"
    );
    return (
      <>
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
