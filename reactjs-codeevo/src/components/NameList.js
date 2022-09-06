import React from "react";
import StrawHat from "./StrawHat";

// function NameList() {
//   const strawHats = [
//     "Luffy",
//     "Zoro",
//     "Nami",
//     "Ussop",
//     "Sanji",
//     "Chopper",
//     "Robin",
//     "Franky",
//     "Brook",
//   ];

//   //RENDERING LIST WITH THE MAP METHOD.
//   const strawHatsList = strawHats.map((sh) => <h2>{sh}</h2>);
//   return <div>{strawHatsList}</div>;
//   //   return (
//   //     <div>
//   //       {strawHats.map((sh) => (
//   //         <h2>{sh}</h2>
//   //       ))}
//   //     </div>
//   //   );

//   //RENDERING LIST WITHOUT ANY LOOP.
//   //   return (
//   //     <div>
//   //       <h2>{strawHats[0]}</h2>
//   //       <h2>{strawHats[1]}</h2>
//   //       <h2>{strawHats[2]}</h2>
//   //       <h2>{strawHats[3]}</h2>
//   //       <h2>{strawHats[4]}</h2>
//   //       <h2>{strawHats[5]}</h2>
//   //       <h2>{strawHats[6]}</h2>
//   //       <h2>{strawHats[7]}</h2>
//   //       <h2>{strawHats[8]}</h2>
//   //     </div>
//   //   );
// }

// function NameList() {
//   const strawHats = [
//     { id: 1, name: "Luffy", power: "Gum Gum Fruit" },
//     { id: 2, name: "Zoro", power: "Swordsmen" },
//     { id: 3, name: "Nami", power: "Wheather Attacks" },
//     { id: 4, name: "Ussop", power: "Sniper" },
//     { id: 5, name: "Sanji", power: "Kicks" },
//     { id: 6, name: "Chopper", power: "Human Human Fruit" },
//     { id: 7, name: "Robin", power: "Flower Flower Fruit" },
//     { id: 8, name: "Franky", power: "Cyborg" },
//     { id: 9, name: "Brook", power: "Revival Revival Fruit" },
//   ];

//   //RENDERING LIST WITH THE MAP METHOD MORE EFFICIENTLY.
//   //   const strawHatsList = strawHats.map((sh) => (
//   //     <h2 style={{ textAlign: "left" }}>
//   //       Name : {sh.name} Power : {sh.power}
//   //     </h2>
//   //   ));
//   //RENDERING LIST WITH THE MAP METHOD EXTRA EFFICIENTLY.
//   const strawHatsList = strawHats.map((sh) => <StrawHat key={sh.id} sh={sh} />);
//   return <div>{strawHatsList}</div>;
// }

// USING INDEX AS A KEY.
function NameList() {
  const strawHats = [
    "Luffy",
    "Zoro",
    "Nami",
    "Ussop",
    "Sanji",
    "Chopper",
    "Robin",
    "Franky",
    "Brook",
  ];

  //RENDERING LIST WITH THE MAP METHOD EXTRA EFFICIENTLY.
  const strawHatsList = strawHats.map((sh, index) => (
    <p key={index}>
      {index}. {sh}
    </p>
  ));
  return <div>{strawHatsList}</div>;
}

export default NameList;
