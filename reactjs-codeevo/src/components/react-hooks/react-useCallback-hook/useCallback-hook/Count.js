// USECALLBACK HOOK IN REACT JS

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
