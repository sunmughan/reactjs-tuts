import React, { useReducer } from "react";
// import CounterOne from "./useReducer-hook/CounterOne";
// import CounterTwo from "./useReducer-hook/CounterTwo";
// import CounterThree from "./useReducer-hook/CounterThree";
import ComponentA from "./useReducer-and-useContext/ComponentA";
import ComponentB from "./useReducer-and-useContext/ComponentB";
import ComponentC from "./useReducer-and-useContext/ComponentC";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const CounterContext = React.createContext(initialState);

const ReactUseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* USE REDUCER HOOK IN REACT JS */}

      {/* SIMPLE STATE AND ACTION IN USE REDUCER */}
      {/* <CounterOne /> */}

      {/* COMPLEX STATE AND ACTION IN USE REDUCER */}
      {/* <CounterTwo /> */}

      {/* MULTIPLE USE REDUCER HOOKS */}
      {/* <CounterThree /> */}

      {/* USE REDUCER HOOK WITH THE USE CONTEXT HOOK */}
      <CounterContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>{count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </>
  );
};

export default ReactUseReducerHook;
