// STYLING REACT JS COMPONENTS.

import React from "react";
import "./Stylesheet.css";
// CSS MODULES FOR STYLING IN REACT JS
import styles from "./Stylesheet.module.css";

const Stylesheet = (props) => {
  // CSS STYLESHEETS FOR STYLING IN REACT JS
  //   const className = props.primary ? "primary" : "";

  // INLINE STYLING FOR STYLING IN REACT JS
  //   const styles = {
  //     fontSize: "3rem",
  //     color: "violet",
  //   };

  return (
    <div>
      {/* CSS STYLESHEETS FOR STYLING IN REACT JS */}
      {/* <h1 className={className}>Stylesheet one</h1> */}
      {/* <h1 className={`${className} large`}>Stylesheet two</h1> */}

      {/* INLINE STYLING FOR STYLING IN REACT JS */}
      {/* <h1 style={styles}>Stylesheet one</h1> */}

      {/* CSS MODULES FOR STYLING IN REACT JS */}
      <p className="error">Style it!!!</p>
      <p className={styles.success}>Style it!!!</p>
    </div>
  );
};

export default Stylesheet;
