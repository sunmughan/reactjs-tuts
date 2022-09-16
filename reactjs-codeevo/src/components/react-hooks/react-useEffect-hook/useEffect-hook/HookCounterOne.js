// USE EFFECT HOOK IN REACT JS
// IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH HOOKS IN FUNCTIONAL COMPONENT
// CONDITIONALLY RUNNING USE EFFECT HOOK IN CLASS COMPONENT
import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // CALL USE EFFECT HOOK AND PASS IN A FUNCTION WHICH WILL BE EXECUTED FOR EVERY RENDER
  useEffect(() => {
    console.log("useEffect - updating document title.");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <input
        type={"text"}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} Times
      </button>
    </>
  );
};

export default HookCounterOne;
