// ADDING A REF TO COMPONENT IN REACTJS.

import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inpRef = React.createRef();
  }

  focusInput() {
    this.inpRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type={"text"} ref={this.inpRef} />
      </div>
    );
  }
}

export default Input;
