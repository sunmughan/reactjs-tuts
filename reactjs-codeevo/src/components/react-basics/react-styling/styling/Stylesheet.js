// STYLING REACT JS COMPONENTS.

import "./Stylesheet.css";
import styles from "./Stylesheet.module.css";

const Stylesheet = (props) => {
  // CSS STYLESHEETS
  //   const className = props.primary ? "primary" : "";

  // INLINE STYLING
  //   const styles = {
  //     fontSize: "3rem",
  //     color: "violet",
  //   };

  return (
    <>
      {/* CSS STYLESHEETS */}
      {/* <h1 className={className}>Stylesheet one</h1> */}
      {/* <h1 className={`${className} large`}>Stylesheet two</h1> */}

      {/* INLINE STYLING */}
      {/* <h1 style={styles}>Stylesheet one</h1> */}

      {/* CSS MODULES */}
      <p className="error">Style it!!!</p>
      <p className={styles.success}>Style it!!!</p>
    </>
  );
};

export default Stylesheet;
