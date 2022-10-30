import CountUp, { useCountUp } from "react-countup";
// import CountUp from "react-countup/build/CountUp";

const ReactCountUp = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    startOnMount: false,
    end: 1234567,
    duration: 5,
  });

  return (
    <>
      <h1>useCountUp Hook</h1>
      <h2 ref={countUpRef}></h2>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
      <br />
      <h1>Basic Count Up</h1>
      <h2>
        <CountUp end={200} />
      </h2>
      <br />
      <h1>Count Up With 5 Sec Duration</h1>
      <h2>
        <CountUp end={200} duration={5} />
      </h2>
      <br />
      <h1>Count Up With Start Value of 500</h1>
      <h2>
        <CountUp start={500} end={1000} duration={5} />
      </h2>
      <br />
      <h1>Count Up With Prefix and Suffix Values With Decimals</h1>
      <h2>
        <CountUp end={1000} duration={5} decimals={2} prefix={"$"} />
      </h2>
      <h2>
        <CountUp end={1000} duration={5} decimals={2} suffix={"USD"} />
      </h2>
    </>
  );
};

export default ReactCountUp;
