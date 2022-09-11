// CONDITIONAL RENDERING IN REACTJS
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // NO CODITIONS
    // return (
    //   <>
    //     <h1>Hello Peter!!!</h1>
    //     <h1>Hello Guest!!!</h1>
    //   </>
    // );

    // BY USING IF-ELSE STATEMENT
    // if (this.state.isLoggedIn) {
    //   return (
    //     <>
    //       <h1>Hello Peter!!!</h1>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <h1>Hello Guest!!!</h1>
    //     </>
    //   );
    // }

    // ELEMENT VARIABLE
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>Hello Peter!!!</h1>;
    // } else {
    //   message = <h1>Hello Guest!!!</h1>;
    // }
    // return <>{message}</>;

    // SHORT CIRCUIT OPERATOR
    // return this.state.isLoggedIn && <h1>Hello Peter!!!</h1>;

    // TERNARY OPERATOR
    return this.state.isLoggedIn ? (
      <h1>Hello Peter!!!</h1>
    ) : (
      <h1>Hello Guest!!!</h1>
    );
  }
}

export default UserGreeting;
