// TOOLTIP IN REACT JS
import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ColoredComponent = () => {
  return (
    <h5 style={{ color: "yellow" }}>
      Tooltip With React Component As It's Content
    </h5>
  );
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ color: "cyan" }}>
      <h5>Tooltip with multiple Custom Child component.</h5>
      <h5>Tooltip with multiple Custom Child component.</h5>
    </div>
  );
});

const ReactTippy = () => {
  return (
    <>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          content={
            <h5 style={{ color: "orange" }}>Tooltip With HTML Content</h5>
          }
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredComponent />}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredComponent />}>
          <CustomChild />
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Tooltip without arrow" arrow={false}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Tooltip with some delay" delay={1000}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div
        style={{
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tippy content="Tooltip with right placement" placement={"right"}>
          <button style={{ display: "block", textAlign: "center" }}>
            Hover
          </button>
        </Tippy>
        <Tippy content="Tooltip with left placement" placement={"left"}>
          <button style={{ display: "block", textAlign: "center" }}>
            Hover
          </button>
        </Tippy>
        <Tippy content="Tooltip with top placement" placement={"top"}>
          <button style={{ display: "block", textAlign: "center" }}>
            Hover
          </button>
        </Tippy>
        <Tippy content="Tooltip with botttom placement" placement={"bottom"}>
          <button style={{ display: "block", textAlign: "center" }}>
            Hover
          </button>
        </Tippy>
        <Tippy content="Tooltip with right start placement" placement="top-end">
          <button
            style={{ display: "block", textAlign: "center", width: "100%" }}
          >
            Hover
          </button>
        </Tippy>
      </div>
    </>
  );
};

export default ReactTippy;
