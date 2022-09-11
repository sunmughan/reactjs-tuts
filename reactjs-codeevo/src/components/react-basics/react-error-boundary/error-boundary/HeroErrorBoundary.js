// ERROR BOUNDARY IN REACT JS.
import React from "react";

function HeroErrorBoundary({ name }) {
  if (name === "Sand Man") {
    throw new Error("Not a Hero");
  }
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default HeroErrorBoundary;
