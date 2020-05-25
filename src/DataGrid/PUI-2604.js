import React from "react";
import { DSDataGrid } from "@elliemae/ds-datagrids";
import DSToolbar, { ToolbarItem } from "@elliemae/ds-basic/Toolbar";
import Delete from "@elliemae/ds-icons/Delete";
import editableColumns from "./editableColumns";
import { randomEntities } from "../utils/randomData";

const rows = randomEntities(5);

export default () => {
  return (
    <DSDataGrid
      columns={editableColumns}
      rows={rows}
      searchFilters
      fluidHeight
      sortable
      editable
      resizeableColumns
      renderToolbar={({ rowData }) => (
        <DSToolbar>
          <ToolbarItem
            disabled={rowData.defaultDisposition}
            icon={<Delete />}
          />
        </DSToolbar>
      )}
    />
  );
};
