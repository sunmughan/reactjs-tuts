// CUSTOM HOOKS IN REACT JS
import React, { useState } from "react";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  //   REGULAR WAY
  //   useEffect(() => {
  //     document.title = `Count ${count}`;
  //   }, [count]);

  //   CUSTOM HOOKS WAY
  useDocumentTitle(count);

  return (
    <>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment Count - {count}
      </button>
    </>
  );
};

export default DocTitleOne;
