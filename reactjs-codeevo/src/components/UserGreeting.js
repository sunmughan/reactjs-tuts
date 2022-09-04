// CONDITIONAL RENDERING IN REACTJS.

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
    //   <div>
    //     <div>Welcome Peter</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
    // BY USING IF-ELSE STATEMENT
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Peter</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
    // }
    // ELEMENT VARIABLE
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Peter</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // TERNARY OPERATOR
    return this.state.isLoggedIn ? (
      <div>Welcome Peter</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // SHORT CIRCUIT OPERATOR
    // return this.state.isLoggedIn && <div>Welcome Peter</div>;
  }
}

export default UserGreeting;
