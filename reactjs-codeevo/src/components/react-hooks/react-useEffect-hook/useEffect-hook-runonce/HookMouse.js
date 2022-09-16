// RUN EFFECT(USE EFFECT) ONLY ONCE AT THE BEGINNING(COMPONENT DID MOUNT) IN FUNCTIONAL COMPONENT IN REACT JS
// RUN EFFECT(USE EFFECT) ONLY ONCE AT THE END(COMPONENT WILL UNMOUNT) IN FUNCTIONAL COMPONENT IN REACT JS
import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse event called");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("useEffect Hook Called");
    window.addEventListener("mousemove", logMousePosition);

    // COMPONENT WILL UNMOUNT FUNCTIONALITY
    return () => {
      console.log("component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // COMPONENT DID MOUNT FUNCTIONALITY

  return (
    <>
      <h1>
        HOOKS : X - {x} Y - {y}
      </h1>
    </>
  );
};
export default HookMouse;
