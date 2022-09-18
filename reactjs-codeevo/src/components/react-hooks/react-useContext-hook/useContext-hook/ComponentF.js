// CONSUMING THE VALUE OF CONTEXT NORMALLY IN REACT JS
import React from "react";
import { UserContext, ChannelContext } from "../ReactUseContextHook";

const ComponentF = () => {
  return (
    <>
      <h1>Component F</h1>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <h4>
                    The user context value is {user} And the channel context
                    value is {channel}
                  </h4>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default ComponentF;
