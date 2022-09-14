// IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH LIFECYCLE METHODS IN CLASS COMPONENT
import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.incrementCounter}>
          button clicked {this.state.count} times
        </button>
      </>
    );
  }
}

export default ClassCounterOne;
