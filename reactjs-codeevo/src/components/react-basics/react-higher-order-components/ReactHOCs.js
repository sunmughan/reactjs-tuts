import React from "react";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";

const ReactHOCs = () => {
  return (
    <>
      {/* CLICK COUNTER USING HOC */}
      <ClickCounter name={"Peter"} />
      {/* HOVER COUNTER USING HOC */}
      <HoverCounter />
    </>
  );
};

export default ReactHOCs;
