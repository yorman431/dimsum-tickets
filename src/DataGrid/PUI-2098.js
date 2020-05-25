import React from "react";
import { DSDataGrid } from "@elliemae/ds-datagrids";
import columns from "./columns";
import { randomGroupedEntities } from "../utils/randomData";

const groupedRows = randomGroupedEntities(10);

export default () => {
  return (
    <DSDataGrid
      columns={columns}
      rows={groupedRows}
      searchFilters
      autoHeight
      resizeableColumns
      getChildrenRows={({ rowData }) => rowData.children}
      groupedRows
      groupedRowsRenderHeader={rowData => {
        const { group, children } = rowData || {};
        return (
          <>
            Group : {group} ({children.length})
          </>
        );
      }}
    />
  );
};
