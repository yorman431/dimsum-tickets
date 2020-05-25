import React from "react";
import { DSDataGrid } from "@elliemae/ds-datagrids";
import columns from "./columns";
import { randomEntities } from "../utils/randomData";

const groupedRows = randomEntities(5);

// Prints only the index (3rd arg) e.g: [] "mixed" 4
const onSelectRow = (a, b, c) => {
  console.log(a, b, c);
};

export default () => {
  return (
    <DSDataGrid
      onSelectRow={onSelectRow}
      columns={columns}
      rows={groupedRows}
      searchFilters
      sortable
      selectable
      autoHeight
      resizeableColumns
      groupedBy="group"
      // getChildrenRows={({ rowData }) => rowData.children}
      groupedRows
      groupedRowsRenderHeader={rowData => {
        console.log(rowData);
        const { value } = rowData || {};
        return <> Group : {value} </>;
      }}
    />
  );
};
