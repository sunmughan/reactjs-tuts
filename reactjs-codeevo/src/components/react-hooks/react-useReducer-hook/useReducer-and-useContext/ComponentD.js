// USE REDUCER HOOK WITH THE USE CONTEXT HOOK
import React, { useContext } from "react";
import { CounterContext } from "../ReactUseReducerHook";

const ComponentD = () => {
  const countContext = useContext(CounterContext);

  return (
    <>
      <h1>ComponentD {countContext.countState}</h1>
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default ComponentD;
