// EVENT HANDLING IN FUNCTIONAL COMPONENT.

import React from "react";

const FunctionClick = () => {
  const clickHandler = () => {
    console.log("Button is clickede");
  };

  return (
    <div>
      {/* RIGHT METHOD */}
      <button onClick={clickHandler}>click</button>
      {/* WRONG METHOD */}
      {/* <button onClick={clickHandler()}>click</button> */}
    </div>
  );
};

export default FunctionClick;
