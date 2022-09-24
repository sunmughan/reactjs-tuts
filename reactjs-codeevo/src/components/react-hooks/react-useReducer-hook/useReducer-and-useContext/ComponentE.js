// USE REDUCER HOOK WITH THE USE CONTEXT HOOK
import React, { useContext } from "react";
import { CounterContext } from "../ReactUseReducerHook";
import ComponentF from "./ComponentF";

const ComponentE = () => {
  const countContext = useContext(CounterContext);

  return (
    <>
      <h1>ComponentE {countContext.countState}</h1>
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
      <ComponentF />
    </>
  );
};

export default ComponentE;
