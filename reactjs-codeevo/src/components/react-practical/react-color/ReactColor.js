// COLOR PICKER IN REACT JS
import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ReactColor = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowColorPicker((prevShowColorPicker) => !prevShowColorPicker);
        }}
      >
        {showColorPicker ? "Close Color Picker" : "Open Color Picker"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h1>{`The Selected Color Is =  ${color}`}</h1>
    </>
  );
};

export default ReactColor;
