// REACT FRAGMENTS PRACTICAL USE CASE

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
