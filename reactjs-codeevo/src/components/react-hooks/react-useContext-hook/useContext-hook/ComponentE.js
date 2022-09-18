// CONSUMING THE VALUE OF CONTEXT USING USECONTEXT HOOK IN REACT JS
import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../ReactUseContextHook";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      <h1>Component E</h1>
      <h4>
        {user} and {channel}
      </h4>
      <ComponentF />
    </>
  );
};

export default ComponentE;
