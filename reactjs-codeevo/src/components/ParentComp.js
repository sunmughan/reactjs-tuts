// PURE COMPONENTS IN REACT JS.

import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
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
  //     <div>
  //       Parent Component
  //       <PureComp name={this.state.name} />
  //       <RegComp name={this.state.name} />
  //     </div>
  //   );
  // }

  render() {
    console.log(
      "*********************PARENT COMPONENT RENDER*********************"
    );
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
