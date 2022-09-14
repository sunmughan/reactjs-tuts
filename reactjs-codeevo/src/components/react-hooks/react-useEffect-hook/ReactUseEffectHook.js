import React from "react";
// import ClassCounterOne from "./useEffect-hook/ClassCounterOne";
import HookCounterOne from "./useEffect-hook/HookCounterOne";

const ReactUseEffectHook = () => {
  return (
    <>
      {/* IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH LIFECYCLE METHODS IN CLASS COMPONENT */}
      {/* <ClassCounterOne /> */}

      {/* IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH HOOKS IN FUNCTIONAL COMPONENT */}
      <HookCounterOne />
    </>
  );
};

export default ReactUseEffectHook;
