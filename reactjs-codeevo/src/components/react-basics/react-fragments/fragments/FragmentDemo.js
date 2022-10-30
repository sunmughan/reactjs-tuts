// FRAGMENTS IN REACT JS

function FragmentDemo() {
  // USUAL APPROACH.
  // return (
  //   <div>
  //     <h1>Fragment Demo</h1>
  //     <p>This is the Fragments component.</p>
  //   </div>
  // );

  // REACT FRAGMENT APPROACH.
  // return (
  //   <React.Fragment>
  //     <h1>Fragment Demo</h1>
  //     <p>This is the Fragments component.</p>
  //   </React.Fragment>
  // );

  // REACT FRAGMENT FOR SHOWING A LIST OF ITEMS.
  // let items = ["One Piece", "Bleach", "Naruto", "DBZ"];
  // return (
  //   <React.Fragment>
  //     {items.map((item, index) => (
  //       <React.Fragment key={index}>
  //         <h1>{item}</h1>
  //       </React.Fragment>
  //     ))}
  //   </React.Fragment>
  // );

  // REACT FRAGMENTS SHORTHAND.
  return (
    <>
      <h1>SHORTHAND FOR FRAGMENTS</h1>
      <p>
        We can just use empty tags instead of writign React.Fragment Every time.
      </p>
    </>
  );
}

export default FragmentDemo;
