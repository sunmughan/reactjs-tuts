// EVENT HANDLING IN CLASS COMPONENT.

import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler = () => {
    console.log("Button is clickede");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default ClassClick;
