import React from "react";
import { DSDataGrid } from "@elliemae/ds-datagrids";
import editableColumns from "./editableColumns";
import { randomEntities } from "../utils/randomData";

const rows = randomEntities(5);

export default () => {
  return (
    <DSDataGrid
      columns={editableColumns}
      rows={rows}
      searchFilters
      sortable
      editable
      autoHeight
      resizeableColumns
      // onColumnRowEdited={editRowColumn}
    />
  );
};
