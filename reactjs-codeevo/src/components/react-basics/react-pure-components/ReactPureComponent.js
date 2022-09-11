import React from "react";
import ParentComp from "./memo-and-pure-components/ParentComp";
import PureComp from "./pure-component/PureComp";

const ReactPureComponent = () => {
  return (
    <>
      {/* PURE COMPONENT IN REACT JS */}
      <PureComp />
      {/* MEMO IN REACT JS */}
      <ParentComp />
    </>
  );
};

export default ReactPureComponent;
