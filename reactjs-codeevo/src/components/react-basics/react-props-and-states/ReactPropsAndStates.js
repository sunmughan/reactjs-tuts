// PROPS AND STATES IN REACT JS
import React from "react";
import GreetWithProp from "./props/GreetWithProp";
import GreetWithPropC from "./props/GreetWithPropC";
import Message from "./states/Message";
import Counter from "./setState/Counter";

const ReactPropsAndStates = () => {
  return (
    <>
      {/* FUNCTIONAL COMPONENT PROPS */}
      <GreetWithProp name="Jonathan Joestar" secretName="Jo Jo">
        <h2>props.children content (FUNCTIONAL COMPONENT)</h2>
      </GreetWithProp>
      {/* CLASS COMPONENT PROPS */}
      <GreetWithPropC name="Jonathan Joestar" secretName="Jo Jo">
        <h2>props.children content (CLASS COMPONENT)</h2>
      </GreetWithPropC>
      {/* STATES IN REACT JS */}
      <Message />
      {/* SET STATE IN REACT JS */}
      <Counter />
    </>
  );
};

export default ReactPropsAndStates;
