import ErrorBoundary from "./error-boundary/ErrorBoundary";
import HeroErrorBoundary from "./error-boundary/HeroErrorBoundary";

const ReactErrorBoundary = () => {
  return (
    <>
      {/* <ErrorBoundary>
        <HeroErrorBoundary name={"Spider Man"} />
        <HeroErrorBoundary name={"Sand Man"} />
      </ErrorBoundary> */}
      <ErrorBoundary>
        <HeroErrorBoundary name={"Spider Man"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrorBoundary name={"Sand Man"} />
      </ErrorBoundary>
    </>
  );
};

export default ReactErrorBoundary;
