// REFS IN REACT JS.

import React, { Component } from "react";

class RefsDemo extends Component {
  // FIRST APPROACH NORMAL REF.
  //   constructor(props) {
  //     super(props);
  //     this.inputRef = React.createRef();
  //   }
  //   componentDidMount() {
  //     this.inputRef.current.focus();
  //   }
  //   clickHandler = () => {
  //     alert(this.inputRef.current.value);
  //   };
  //   render() {
  //     return (
  //       <div>
  //         <input type={"text"} ref={this.inputRef} />
  //         <button type="button" onClick={this.clickHandler}>
  //           Submit
  //         </button>
  //       </div>
  //     );
  //   }

  // SECOND APPROACH CALLBACK REF.
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    this.cbRef.focus();
  }
  clickHandler = () => {
    alert(this.cbRef.value);
  };
  render() {
    return (
      <div>
        <input type={"text"} ref={this.setCbRef} />
        <button type="button" onClick={this.clickHandler}>
          Submit
        </button>
      </div>
    );
  }
}

export default RefsDemo;
