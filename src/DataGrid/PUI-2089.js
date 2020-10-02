import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import columns from './columns';
import { randomGroupedEntities } from '../utils/randomData';

const groupedRows = randomGroupedEntities(5);

// Prints: [] "mixed" undefined
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
      selectable="single"
      showSelectColumn={false}
      autoHeight
      resizeableColumns
      getChildrenRows={({ rowData }) => rowData.children}
      groupedRows
      groupedRowsRenderHeader={(rowData) => {
        const { group } = rowData || {};
        return <> Group : {group} </>;
      }}
    />
  );
};
