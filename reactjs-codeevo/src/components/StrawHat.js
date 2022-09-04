import React from "react";

function StrawHat({ sh }) {
  return (
    <h2 style={{ textAlign: "left" }}>
      Name : {sh.name} Power : {sh.power}
    </h2>
  );
}

export default StrawHat;
