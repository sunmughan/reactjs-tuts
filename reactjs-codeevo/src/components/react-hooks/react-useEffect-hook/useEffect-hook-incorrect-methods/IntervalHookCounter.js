// USE EFFECT WITH INCORRECT DEPENDENCY IN REACT JS
import React, { useState, useEffect } from "react";

// DON'T FORGET TO ADD THE STATES OR PROPS TO THE USE EFFECT DEPENDENCY ARRAY
// const IntervalHookCounter = () => {
//   const [count, setCount] = useState(0);

//   const tick = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     let interval = setInterval(tick, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [count]);

//   return <>{count}</>;
// };

// TO SOLVE THE ABOVE PROBLEM WE CAN ALSO USE PREVIOUS STATE WHEN WE ARE SETTING STATE
// const IntervalHookCounter = () => {
//   const [count, setCount] = useState(0);

//   const tick = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   // WRONG. DON'T DEFINE FUNCTIONS WHICH ARE GOING TO BE USED IN USE EFFECT HOOK OUTSIDE THE HOOK
//   // const doSomething = () => {
//   //   console.log(someProp);
//   // };

//   useEffect(() => {
//     let interval = setInterval(tick, 1000);

//     // RIGHT. INSTEAD OF THAT DEFINE THE FUNCTIONS USED IN USE EFFECT HOOK INSIDE THE HOOK
//     const doSomething = () => {
//       console.log(someProp);
//     };

//     return () => {
//       clearInterval(interval);
//     };
//   }, [someProp]);

//   return <>{count}</>;
// };

// USING MULTIPLE USE EFFECTS IN A FUNCTIONAL COMPONENT(SPLITTING RELATED CODE)
const IntervalHookCounter = () => {
  const [staticCount, setStaticCount] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("COUNT RE RENDERED");
    setCount(name.length);
  }, [count]);

  const [name, setName] = useState("Peter Parker");
  useEffect(() => {
    console.log("NAME RE RENDERED");
    setCount(name.length);
  }, [name]);

  return (
    <>
      <input
        type={"text"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setCount(e.target.value.length);
        }}
        onFocus={() => {
          console.log(staticCount);
          if (staticCount === 0) {
            setName("Spider Man!!!");
            setStaticCount(1);
          }
        }}
      />
      <p>{name}</p>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setName((prevName) => prevName + " ");
        }}
      >
        Add count {count}
      </button>
    </>
  );
};

export default IntervalHookCounter;
