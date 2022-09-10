import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentG extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return (
            <div>
              <h1>COMPONENT G</h1>
              <p>{userName}</p>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentG;
