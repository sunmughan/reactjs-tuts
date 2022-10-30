import FRParentInput from "../../FRParentInput";
import FocusInput from "./refs/FocusInput";
import RefsDemo from "./refs/RefsDemo";

const ReactRefs = () => {
  return (
    <>
      {/* REFS IN REACT JS */}
      <RefsDemo />
      {/* REFS TO ANOTHER COMPONENTS */}
      <FocusInput />
      {/* REF FORWARDING IN REACT JS */}
      <FRParentInput />
    </>
  );
};

export default ReactRefs;
