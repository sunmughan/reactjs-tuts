// RENDERING LISTS IN REACT JS

function PetersItem({ sh }) {
  return (
    <h2 style={{ textAlign: "left" }}>
      Name : {sh.name} aka : {sh.aka}
    </h2>
  );
}

export default PetersItem;
