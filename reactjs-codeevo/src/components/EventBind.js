import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello peter",
    };

    // BY USING BIND INSIDE THE CONSTRUCTOR
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({ message: "hello spidey" });
  // }
  clickHandler = () => {
    this.setState({ message: "hello spidey" });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* BY USING BIND IN RENDER METHOD */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* BY USING ARROW FUNCTION IN RENDER MEHTOD */}
        {/* <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          click
        </button> */}
        {/* BY USING BIND INSIDE THE CONSTRUCTOR */}
        {/* <button onClick={this.clickHandler}>click</button> */}
        {/* BY USING ARROW FUNCTION AS MEHTOD */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
