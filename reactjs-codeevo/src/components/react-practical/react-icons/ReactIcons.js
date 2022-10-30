// ICONS USING REACT ICONS IN REACT JS

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";

const ReactIcons = () => {
  return (
    <>
      {/* ICON CONTEXT PROVIDER TO PROVIDE SAME STYLES FOR ICONS */}
      <IconContext.Provider value={{ color: "cyan", size: "7rem" }}>
        {/* ICONS WITH INDIVIDUAL STYLES USING PROPS */}
        <FaReact color="purple" size="10rem" />
        <MdAccessAlarm />
      </IconContext.Provider>
    </>
  );
};

export default ReactIcons;
