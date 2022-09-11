// RENDERING LISTS IN REACT JS
import React from "react";
// import PetersItem from "./PetersItem";

//RENDERING LIST WITHOUT ANY LOOP.
// function NameList() {
//   const petersList = ["Peter Parker", "Gwen Stacy", "Mary Jane"];
//   return (
//     <>
//       <h1>{petersList[0]}</h1>
//       <h1>{petersList[1]}</h1>
//       <h1>{petersList[2]}</h1>
//     </>
//   );
// }

//RENDERING LIST WITH THE MAP METHOD.
// function NameList() {
//   const petersList = ["Peter Parker", "Gwen Stacy", "Mary Jane"];
//   // const petersListElements = petersList.map((sh) => <h1>{sh}</h1>);
//   // return <>{petersListElements}</>;
//   return (
//     <>
//       {petersList.map((sh) => (
//         <h1>{sh}</h1>
//       ))}
//     </>
//   );
// }

// RENDERING LIST WITH THE MAP METHOD MORE EFFICIENTLY.
// function NameList() {
//   const petersList = [
//     { id: 1, name: "Peter Parker", aka: "Spider Man" },
//     { id: 2, name: "Gwen Stacy", aka: "Spider Girl" },
//     { id: 3, name: "Mary Jane", aka: "MJ" },
//   ];
//   // const petersListElements = petersList.map((sh) => (
//   //   <h1 style={{ textAlign: "left" }}>
//   //     Name : {sh.name} aka : {sh.aka}
//   //   </h1>
//   // ));
//   //RENDERING LIST WITH THE MAP METHOD EXTRA EFFICIENTLY WITH KEY PROP
//   const petersListElements = petersList.map((sh) => (
//     <PetersItem key={sh.id} sh={sh} />
//   ));
//   return <>{petersListElements}</>;
// }

// USING INDEX AS A KEY.
function NameList() {
  const petersList = ["Peter Parker", "Gwen Stacy", "Mary Jane"];

  //RENDERING LIST WITH THE MAP METHOD EXTRA EFFICIENTLY.
  const petersListElements = petersList.map((sh, index) => (
    <h1 key={index}>
      {index}. {sh}
    </h1>
  ));
  return <>{petersListElements}</>;
}

export default NameList;
