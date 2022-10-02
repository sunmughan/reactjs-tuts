import React, { Component } from "react";
import { withIdleTimer } from "react-idle-timer";

class IdleTimerContainer extends Component {
  onIdle = () => {
    console.log("User Is Idle");
  };

  render() {
    return this.props.children;
  }
}
export const IdleTimer = withIdleTimer(IdleTimerContainer);
