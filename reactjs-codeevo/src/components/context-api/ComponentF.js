// REACT JS CONTEXT API.

import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return (
            <>
              <h1>COMPONENT F</h1>
              <p>{userName}</p>
            </>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
