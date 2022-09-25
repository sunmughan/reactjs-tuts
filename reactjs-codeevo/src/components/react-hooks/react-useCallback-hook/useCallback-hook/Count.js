// USECALLBACK HOOK IN REACT JS
import React from "react";

const Count = (props) => {
  const { text, count } = props;
  console.log(`Rendering Count ${text}`);
  return (
    <>
      <h4>
        {text} - {count}
      </h4>
    </>
  );
};

export default React.memo(Count);
