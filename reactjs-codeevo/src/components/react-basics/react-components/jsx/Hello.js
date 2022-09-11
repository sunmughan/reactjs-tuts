// JSX IN REACT JS
import React from "react";

const Hello = () => {
  // WITH JSX
  // return (
  // <h1 id="peter" className="dummyClass">
  //   Hello Peter!!!
  // </h1>;
  // );

  // WITHOUT JSX
  // return React.createElement('div', null, '<h1>Hello Peter!!!</h1>>');
  return React.createElement(
    "div",
    { id: "peter", className: "dummyClass" },
    React.createElement("h1", null, "Hello Peter!!!")
  );
};

export default Hello;
