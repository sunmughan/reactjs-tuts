// REACT JS CONTEXT API
import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentG extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return (
            <>
              <h1>COMPONENT G</h1>
              <h4>{userName}</h4>
            </>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentG;
