// USE EFFECT HOOK IN REACT JS
// IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH HOOKS IN FUNCTIONAL COMPONENT
import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  // CALL USE EFFECT HOOK AND PASS IN A FUNCTION WHICH WILL BE EXECUTED FOR EVERY RENDER
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} Times
      </button>
    </>
  );
};

export default HookCounterOne;
