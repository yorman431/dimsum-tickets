import React from "react";
import { DSDataGrid } from "@elliemae/ds-datagrids";
import DSToolbar, { ToolbarItem } from "@elliemae/ds-basic/Toolbar";
import Delete from "@elliemae/ds-icons/Delete";
import EditPencil from "@elliemae/ds-icons/EditPencil";
import editableColumns from "./editableColumns";
import { randomEntities } from "../utils/randomData";
// import styled from "styled-components";

// const StyledDataGrid = styled(DSDataGrid)`
//   .workspaces-datagrid {
//     .virtualized-body {
//       height: 100% !important;
//     }
//   }
// `;

const rows = randomEntities(100);

export default () => {
  return (
    <DSDataGrid
      columns={editableColumns}
      rows={rows}
      searchFilters
      sortable
      editable
      fluidHeight
      resizeableColumns
      renderToolbar={({ rowData }) => (
        <DSToolbar>
          <ToolbarItem
            disabled={rowData.defaultDisposition}
            icon={<EditPencil />}
          />
          <ToolbarItem
            disabled={rowData.defaultDisposition}
            icon={<Delete />}
          />
        </DSToolbar>
      )}
    />
  );
};
