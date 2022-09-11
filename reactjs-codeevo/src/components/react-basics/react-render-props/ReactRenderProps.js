import React from "react";
import ClickCounterTwo from "./render-props/ClickCounterTwo";
import CounterRenderProps from "./render-props/CounterRenderProps";
import HoverCounterTwo from "./render-props/HoverCounterTwo";
import User from "./render-props/User";

const ReactRenderProps = () => {
  return (
    <>
      {/* PASSING A FUNCTION TO THE PROPS IN REACT JS. RENDER PROPS */}
      <User render={(isLoggedIn) => (isLoggedIn ? "Peter" : "Guest")} />

      {/* RENDER PROPS IN REACT JS */}
      {/* <CounterRenderProps
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterRenderProps
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* RENDER CHILDREN PROPS IN REACT JS */}
      <CounterRenderProps>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProps>
      <CounterRenderProps>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProps>
    </>
  );
};

export default ReactRenderProps;
