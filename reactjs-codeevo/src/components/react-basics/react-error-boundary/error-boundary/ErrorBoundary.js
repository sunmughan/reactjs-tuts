// ERROR BOUNDARY IN REACT JS
import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("THE ERROR >>> ", error);
    console.log("THE INFO >>> ", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Not a Hero</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
