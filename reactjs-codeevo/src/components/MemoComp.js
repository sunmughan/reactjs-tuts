// REACT JS MEMO.

import React from "react";

function MemoComp({ name }) {
  console.log("RENDERING THE MEMO COMPONENT.");
  return <div>{name}</div>;
}

// export default MemoComp;
export default React.memo(MemoComp);
