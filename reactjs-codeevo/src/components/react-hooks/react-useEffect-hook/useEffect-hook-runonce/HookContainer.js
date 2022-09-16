// RUN EFFECT(USE EFFECT) ONLY ONCE AT THE END(COMPONENT WILL UNMOUNT) IN FUNCTIONAL COMPONENT IN REACT JS
import React, { useState } from "react";
import HookMouse from "./HookMouse";

const HookContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </>
  );
};

export default HookContainer;
