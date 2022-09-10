// HIGHER ORDER FUNCTIONS.

import React, { Component } from "react";
import withCounter from "./withCounter";

// WITHOUT HOC.
// class HoverCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <>
//         <h1 onMouseOver={this.incrementCount}>
//           {this.props.name} Hovered {count} times
//         </h1>
//       </>
//     );
//   }
// }

// WITH HOC.
class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <h1 onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </h1>
      </>
    );
  }
}

export default withCounter(HoverCounter, 5);
