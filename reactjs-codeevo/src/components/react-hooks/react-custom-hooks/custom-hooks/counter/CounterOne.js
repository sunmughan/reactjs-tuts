// CUSTOM HOOKS IN REACT JS
// DOCUMENT TITLE HOOK

import useCounter from "../../../../../hooks/useCounter";

const CounterOne = () => {
  // WITHOUT CUSTOM HOOKS
  //   const initialState = 0;
  //   const [count, setCount] = useState(initialState);

  //   const incrementCount = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const decrementCount = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  //   const resetCount = () => {
  //     setCount(initialState);
  //   };

  //   return (
  //     <>
  //       <h1>{count}</h1>
  //       <button onClick={incrementCount}>Increment Count</button>
  //       <button onClick={decrementCount}>Decrement Count</button>
  //       <button onClick={resetCount}>Reset Count</button>
  //     </>
  //   );

  // WITH CUSTOM HOOKS
  const [count, increment, decrement, reset] = useCounter();
  //   const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
      <button onClick={reset}>Reset Count</button>
    </>
  );
};

export default CounterOne;
