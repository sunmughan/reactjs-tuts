// USEMEMO HOOK IN REACT JS
import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((prevCountOne) => prevCountOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((prevCountTwo) => prevCountTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incrementOne}>Increment One - {counterOne}</button>{" "}
        <p>{isEven ? "even" : "odd"}</p>
      </div>
      <div>
        <button onClick={incrementTwo}>Increment Two - {counterTwo}</button>
      </div>
    </>
  );
};

export default Counter;
