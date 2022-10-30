// PASSING MEHTODS TO PROPS(SEND DATA FROM CHILD TO PARENT COMPONENT).

function ChildComponent(props) {
  return (
    <>
      <button
        onClick={() => {
          props.greetHandler("child");
        }}
      >
        Greet Parent
      </button>
    </>
  );
}

export default ChildComponent;
