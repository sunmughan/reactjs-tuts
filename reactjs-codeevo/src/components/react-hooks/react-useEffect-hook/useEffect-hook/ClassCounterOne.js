// IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH LIFECYCLE METHODS IN CLASS COMPONENT
// CONDITIONALLY RUNNING USE EFFECT HOOK IN CLASS COMPONENT
import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating the dom title.");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        <input
          type={"text"}
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <button onClick={this.incrementCounter}>
          button clicked {this.state.count} times
        </button>
      </>
    );
  }
}

export default ClassCounterOne;
