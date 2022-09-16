// LOG THE POSITION OF MOUSE BY EXECUTING THE MOUSEMOVE EVENT LISTENER IN COMPONENT DID MOUNT ONCE
import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <h1>
        CLASS : X - {this.state.x} Y - {this.state.y}
      </h1>
    );
  }
}

export default ClassMouse;
