// EVENT BINDING IN REACT JS
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Peter!!!",
    };

    // BINDING INSIDE THE CONSTRUCTOR
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // USING ARROW FUNCTION IN RENDER MEHTOD
  // clickHandler() {
  //   this.setState({ message: "Hello Spidey!!!" });
  // }

  // USING ARROW FUNCTION MEHTOD
  clickHandler = () => {
    this.setState({ message: "Hello Spidey!!!" });
  };

  resetClickHandler = () => {
    this.setState({ message: "Hello Peter!!!" });
  };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        {/* BINDING IN RENDER METHOD */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

        {/* USING ARROW FUNCTION IN RENDER MEHTOD */}
        {/* <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          click
        </button> */}

        {/* BINDING INSIDE THE CONSTRUCTOR */}
        {/* <button onClick={this.clickHandler}>click</button> */}

        {/* USING ARROW FUNCTION MEHTOD */}
        <button onClick={this.clickHandler}>Change</button>
        <button onClick={this.resetClickHandler}>Reset</button>
      </>
    );
  }
}

export default EventBind;
