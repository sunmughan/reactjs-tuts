// REACT JS CONTEXT API.

import React, { Component } from "react";
import ComponentF from "./ComponentF";
import { UserConsumer } from "./userContext";

class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return (
            <div>
              <h1>COMPONENT E</h1>
              <p>{userName}</p>
              <ComponentF />
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentE;
