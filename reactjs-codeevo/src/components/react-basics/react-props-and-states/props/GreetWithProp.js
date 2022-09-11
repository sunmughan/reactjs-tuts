// FUNCTIONAL COMPONENT PROPS IN REACT JS
import React from "react";

// const GreetWithProp = (props) => {
//   return (
//     <>
//       <h1>
//         Hello {props.name} AKA {props.secretName}
//       </h1>
//       <h4>{props.children}</h4>
//     </>
//   );
// };

// PROPS DESTRUCTURING IN FUNCTION PARAMETERS
// const GreetWithProp = ({ name, secretName }) => {
//   return (
//     <>
//       <h1>
//         Hello {name} AKA {secretName}
//       </h1>
//       <h4>{props.children}</h4>
//     </>
//   );
// };

// PROPS DESTRUCTURING IN FUNCTION PARAMETERS
const GreetWithProp = (props) => {
  const { name, secretName } = props;
  return (
    <>
      <h1>
        Hello {name} AKA {secretName}
      </h1>
      <h4>{props.children}</h4>
    </>
  );
};

export default GreetWithProp;
