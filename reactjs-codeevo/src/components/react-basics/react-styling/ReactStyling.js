import React from "react";
import Stylesheet from "./styling/Stylesheet";
import "./styling/Stylesheet.css";

const ReactStyling = () => {
  return (
    <>
      {/* STYLING REACT COMPONENTS */}
      <Stylesheet primary={true} />
      <Stylesheet primary={false} />
      <h1 className="error">DONT'T USE NORMAL STYLING USE CSS MODULES</h1>
    </>
  );
};

export default ReactStyling;
