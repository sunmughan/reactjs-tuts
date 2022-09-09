// ERROR BOUNDARY IN REACT JS.

import React from "react";

function HeroErrorBoundary({ name }) {
  if (name === "Orochimaru") {
    throw new Error("Not a Hero");
  }
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default HeroErrorBoundary;
