import React, { memo } from 'react';
import DSToolbar, { ToolbarItem } from '@elliemae/ds-basic/Toolbar';
import DeleteIcon from '@elliemae/ds-icons/Delete';
import EditIcon from '@elliemae/ds-icons/EditPencil';

const Toolbar = memo(({ data: { rowData: workflowRule } }) => {
  return (
    <DSToolbar>
      <ToolbarItem icon={<DeleteIcon />} />
      <ToolbarItem icon={<EditIcon />} />
    </DSToolbar>
  );
});
export const renderToolbar = (data) => <Toolbar data={data} />;
