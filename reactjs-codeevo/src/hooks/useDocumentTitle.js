// CUSTOM HOOKS IN REACT JS
import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
};

export default useDocumentTitle;
