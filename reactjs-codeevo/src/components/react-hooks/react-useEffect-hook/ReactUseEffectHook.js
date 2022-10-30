// import ClassCounterOne from "./useEffect-hook/ClassCounterOne";
// import HookCounterOne from "./useEffect-hook/HookCounterOne";
// import ClassMouse from "./useEffect-hook-runonce/ClassMouse";
// import HookMouse from "./useEffect-hook-runonce/HookMouse";
// import HookContainer from "./useEffect-hook-runonce/HookContainer";
// import IntervalClassCounter from "./useEffect-hook-incorrect-methods/IntervalClassCounter";
// import IntervalHookCounter from "./useEffect-hook-incorrect-methods/IntervalHookCounter";
import DataFetching from "./useEffect-hook-fetch-data/DataFetching";

const ReactUseEffectHook = () => {
  return (
    <>
      {/* IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH LIFECYCLE METHODS IN CLASS COMPONENT */}
      {/* <ClassCounterOne /> */}

      {/* IMPLEMENTING COUNTER AND PAGE TITLE CHANGE WITH HOOKS IN FUNCTIONAL COMPONENT */}
      {/* <HookCounterOne /> */}

      {/* LOG THE POSITION OF MOUSE BY EXECUTING THE MOUSEMOVE EVENT LISTENER IN COMPONENT DID MOUNT ONCE */}
      {/* <ClassMouse /> */}

      {/* RUN EFFECT(USE EFFECT) ONLY ONCE AT THE BEGINNING(COMPONENT DID MOUNT) IN FUNCTIONAL COMPONENT IN REACT JS */}
      {/* <HookMouse /> */}

      {/* RUN EFFECT(USE EFFECT) ONLY ONCE AT THE END(COMPONENT WILL UNMOUNT) IN FUNCTIONAL COMPONENT IN REACT JS */}
      {/* <HookContainer /> */}

      {/* USE EFFECT WITH INCORRECT DEPENDENCY IN REACT JS */}
      {/* <IntervalClassCounter /> */}

      {/* USE EFFECT WITH INCORRECT DEPENDENCY IN REACT JS */}
      {/* <IntervalHookCounter /> */}

      {/* FETCHING DATA USING USE EFFECT HOOK IN REACT JS */}
      <DataFetching />
    </>
  );
};

export default ReactUseEffectHook;
