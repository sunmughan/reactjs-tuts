// COMPONENTS IN REACT JS

import Greet from "./functional-component/Greet";
import Welcome from "./class-component/Welcome";
import Hello from "./jsx/Hello";

const ReactComponents = () => {
  return (
    <>
      {/* FUNCTIONAL COMPONENT */}
      <Greet />
      {/* CLASS COMPONENT */}
      <Welcome />
      {/* JSX */}
      <Hello />
    </>
  );
};

export default ReactComponents;
