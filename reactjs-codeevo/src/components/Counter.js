// SETSTATE IN REACT JS.

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter() {
    // this.state.count = this.state.count + 1;

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("In Callback >>> ", this.state.count);
    //   }
    // );
    // console.log("Out of Callback >>> ", this.state.count);

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("In Callback >>> ", this.state.count);
      }
    );
    console.log("Out of Callback >>> ", this.state.count);
  }

  incrementCounterByFive() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button
          onClick={() => {
            this.incrementCounterByFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
