// EVENT HANDLING IN FUNCTIONAL COMPONENT IN REACT JS

const FunctionClick = () => {
  const clickHandler = () => {
    console.log("Functional Component Button clicked");
  };

  return (
    <>
      {/* RIGHT METHOD */}
      <button onClick={clickHandler}>click</button>
      {/* WRONG METHOD */}
      {/* <button onClick={clickHandler()}>click</button> */}
    </>
  );
};

export default FunctionClick;
