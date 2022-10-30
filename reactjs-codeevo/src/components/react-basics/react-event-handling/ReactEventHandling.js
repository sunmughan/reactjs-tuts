// EVENT HANDLING IN REACT JS

import ClassClick from "./class-event-handling/ClassClick";
import FunctionClick from "./func-event-handling/FunctionClick";
import EventBind from "./event-handler-binding/EventBind";

const ReactEventHandling = () => {
  return (
    <>
      {/* EVENT HANDLING IN FUNCTIONAL COMPONENT */}
      <FunctionClick />
      {/* EVENT HANDLING IN CLASS COMPONENT */}
      <ClassClick />
      {/* EVENT BINDING */}
      <EventBind />
    </>
  );
};

export default ReactEventHandling;
