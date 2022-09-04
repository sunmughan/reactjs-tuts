// PROPS IN REACT JS

// const GreetWithProp = (props) => {
//     console.log('THE PROPS >>> ', props)
//     return (
//         <div>
//             <h4>Hello {props.name} AKA {props.secretName}</h4>
//             {props.children}
//         </div>
//     );
// }

// PROPS DESTRUCTURING IN FUNCTION PARAMETERS

// const GreetWithProp = ({ name, secretName }) => {
//   console.log("THE PROPS >>> ", name, secretName);
//   return (
//     <div>
//       <h4>
//         Hello {name} AKA {secretName}
//       </h4>
//     </div>
//   );
// };

// PROPS DESTRUCTURING IN FUNCTION PARAMETERS

const GreetWithProp = (props) => {
  const { name, secretName } = props;
  console.log("THE PROPS >>> ", name, secretName);
  return (
    <div>
      <h4>
        Hello {name} AKA {secretName}
      </h4>
    </div>
  );
};

export default GreetWithProp;
