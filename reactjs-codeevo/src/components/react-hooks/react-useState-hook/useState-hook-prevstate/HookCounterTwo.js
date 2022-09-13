// USE STATE HOOK WITH PREVIOUS STATE IN REACT JS
import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // WRONG
      // setCount(count + 1);
      // RIGHT
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* WRONG */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment</button>
      {/* RIGHT */}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment</button>
    </>
  );
};

export default HookCounterTwo;
