// RENDER PROPS IN REACT JS
import React, { Component } from "react";

class CounterRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  // USING PROPS.
  //   render() {
  //     return (
  //       <div>{this.props.render(this.state.count, this.incrementCounter)}</div>
  //     );
  //   }

  // USING PROPS CHILDREN.
  render() {
    return (
      <div>{this.props.children(this.state.count, this.incrementCounter)}</div>
    );
  }
}

export default CounterRenderProps;
