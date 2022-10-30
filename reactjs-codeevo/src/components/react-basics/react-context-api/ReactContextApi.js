import { UserProvider } from "./context-api/userContext";
import ComponentC from "./context-api/ComponentC";
import ComponentG from "./context-api/ComponentG";

const ReactContextApi = () => {
  return (
    <>
      {/* REACT JS CONTEXT API */}
      <UserProvider value={"Peter"}>
        <ComponentC />
      </UserProvider>
      <ComponentG />
    </>
  );
};

export default ReactContextApi;
