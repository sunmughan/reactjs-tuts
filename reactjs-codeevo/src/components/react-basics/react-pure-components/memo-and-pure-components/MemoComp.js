// MEMO IN REACT JS

function MemoComp({ name }) {
  console.log("RENDERING THE MEMO COMPONENT.");
  return <h1>{name}</h1>;
}

// export default MemoComp;
export default React.memo(MemoComp);
