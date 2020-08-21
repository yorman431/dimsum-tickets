import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import DSToolbar, { ToolbarItem } from '@elliemae/ds-basic/Toolbar';
import Delete from '@elliemae/ds-icons/Delete';
import EditPencil from '@elliemae/ds-icons/EditPencil';
import columns3 from './columns3';
import { randomEntities } from '../utils/randomData';

const rows = randomEntities(100);

export default () => {
  return (
    <DSDataGrid
      columns={columns3}
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
