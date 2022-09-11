import React, { Component } from "react";
import ReactBasics from "./components/react-basics/ReactBasics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactBasics />
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalDemo /> */}
        {/* <ErrorBoundary>
          <HeroErrorBoundary name={"Naruto"} />
          <HeroErrorBoundary name={"Goku"} />
          <HeroErrorBoundary name={"Orochimaru"} />
        </ErrorBoundary> */}
        {/* <ErrorBoundary>
          <HeroErrorBoundary name={"Naruto"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroErrorBoundary name={"Goku"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroErrorBoundary name={"Orochimaru"} />
        </ErrorBoundary> */}
        {/* <ClickCounter name={"Peter"} />
        <HoverCounter /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "Peter" : "Guest")} /> */}
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
        {/* <CounterRenderProps>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterRenderProps>
        <CounterRenderProps>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterRenderProps> */}
        {/* <UserProvider value={"Peter"}>
          <ComponentC />
        </UserProvider>
        <ComponentG /> */}
        {/* <PostList /> */}
        {/* <PostForm /> */}
      </div>
    );
  }
}

export default App;
