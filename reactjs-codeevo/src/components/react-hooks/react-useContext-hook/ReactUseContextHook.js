// USECONTEXT HOOK IN REACT JS
import React from "react";
import ComponentC from "./useContext-hook/ComponentC";

export const UserContext = React.createContext();

export const ChannelContext = React.createContext();

const ReactUseContextHook = () => {
  return (
    <>
      <UserContext.Provider value={"Peter"}>
        <ChannelContext.Provider value={"Spider Man!!!"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default ReactUseContextHook;
