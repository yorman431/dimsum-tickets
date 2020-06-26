import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import editableColumns from './editableColumns';
import { randomEntities } from '../utils/randomData';

const rows = randomEntities(5);

const editedRows = [
  ...rows,
  {
    id: 6,
    name: 'Random User',
    owner: '',
    salary: 123123.23,
  },
  {
    id: 7,
    name: 'Random User 2',
    owner: 'Test',
    salary: '',
  },
  {
    id: 8,
    name: 'Random User 2',
    owner: '',
    salary: 123123.21,
  },
  {
    id: 8,
    name: '',
    owner: 'Test2',
    salary: 123123.21,
  },
];

export default () => {
  return (
    <DSDataGrid
      columns={editableColumns}
      rows={editedRows}
      searchFilters
      fluidHeight
      sortable
      editable
      resizeableColumns
    />
  );
};
