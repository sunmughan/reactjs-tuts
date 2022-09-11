// REACT JS CONTEXT API
import React, { Component } from "react";
import ComponentF from "./ComponentF";
import { UserConsumer } from "./userContext";

class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return (
            <>
              <h1>COMPONENT E</h1>
              <h4>{userName}</h4>
              <ComponentF />
            </>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentE;
