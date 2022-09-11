// REACT FRAGMENTS PRACTICAL USE CASE
import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
