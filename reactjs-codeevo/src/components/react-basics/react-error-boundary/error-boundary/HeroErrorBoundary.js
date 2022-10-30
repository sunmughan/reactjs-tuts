// ERROR BOUNDARY IN REACT JS.

function HeroErrorBoundary({ name }) {
  if (name === "Sand Man") {
    throw new Error("Not a Hero");
  }
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default HeroErrorBoundary;
