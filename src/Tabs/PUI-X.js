import React, { useState } from "react";
import { DSDataGrid } from "@elliemae/ds-datagrids";
import { DSTabs, DSTab } from "@elliemae/ds-basic/dstabs";
import editableColumns from "../DataGrid/editableColumns";
import { randomEntities } from "../utils/randomData";

// const rows = randomEntities(5);

export default () => {
  const [rows, setRows] = useState(randomEntities(5));

  const editRowColumn = ({ value, property, rowIndex }) => {
    const newRows = [...rows];
    console.log(value, property, rowIndex);
    newRows[rowIndex][property] = value;
    console.log(newRows[rowIndex][property]);
    setRows(newRows);
  };
  console.log(1, rows);

  return (
    <DSTabs>
      <DSTab tabId="tab-1" title="Tab-1">
        <DSDataGrid
          columns={editableColumns}
          rows={rows}
          searchFilters
          sortable
          editable
          autoHeight
          resizeableColumns
          // onColumnRowEdited={editRowColumn(1)}
        />
      </DSTab>
      <DSTab tabId="tab-2" title="Tab-2">
        <DSDataGrid
          columns={editableColumns}
          rows={rows}
          searchFilters
          sortable
          editable
          autoHeight
          resizeableColumns
          onColumnRowEdited={editRowColumn}
        />
      </DSTab>
    </DSTabs>
  );
};
