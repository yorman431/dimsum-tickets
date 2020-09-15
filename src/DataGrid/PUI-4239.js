import React, { useCallback } from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import DSToggle from '@elliemae/ds-basic/form/Toggle';
import { get } from 'lodash';
/* import { DSPageHeaderV2, PageHeaderTitle } from "@elliemae/ds-basic/PageHeader";
import { ToolbarGroup } from "@elliemae/ds-basic";
import DSToolbar from "@elliemae/ds-basic/esm/Toolbar"; */

const rows = [
  {
    id: 91,
    name: 'Chris',
    date: '09-03-2020',
    status: false,
  },
  {
    id: 92,
    name: 'Matthew',
    date: '09-03-2020',
    status: false,
  },
  {
    id: 93,
    name: 'Walter',
    date: '09-03-2020',
    status: false,
  },
  {
    id: 94,
    name: 'Mark',
    date: '11-13-1995',
    status: false,
  },
  {
    id: 1,
    name: 'Bill',
    date: '11-08-1995',
    status: true,
  },
  {
    id: 2,
    name: 'Joey',
    date: '11-29-1995',
    status: true,
  },
  {
    id: 3,
    name: 'Amanda',
    date: '03-09-1997',
    status: true,
  },
  {
    id: 467,
    name: 'Charles',
    date: '03-06-1997',
    status: true,
  },
  {
    id: 1115,
    name: 'Gustavo',
    date: '05-06-1997',
    status: true,
  },
  {
    id: 27,
    name: 'Maximilian',
    date: '03-20-1997',
    status: true,
  },
  {
    id: 33,
    name: 'Albert',
    date: '03-21-1997',
    status: true,
  },
  {
    id: 41,
    name: 'Sebastian',
    date: '03-22-1997',
    status: true,
  },
];

const columns = [
  {
    property: 'name',
    label: 'Name',
    visible: true,
    searchable: true,
  },
  {
    property: 'date',
    filter: {
      type: 'date-switcher',
    },
    label: 'Single-Range',
    visible: true,
    searchable: true,
  },
  {
    property: 'date',
    filter: {
      type: 'single-date',
    },
    label: 'Start Date',
    visible: true,
    searchable: true,
  },
  {
    property: 'status',
    label: 'Status',
    visible: true,
    searchable: true,
    customRenderer: (props) => (
      <ToggleCell {...props} activeField="status" />
    ),
    filterOptions: [
      { id: 'true', label: 'Active' },
      { id: 'false', label: 'Inactive' },
    ],
    valueTransformation: (value) => !!value,
  },
];

export default () => {
  return (
    <DSDataGrid
      columns={columns}
      fluidHeight
      onAddFilter={(...args) => console.log('onAddFilter', ...args)}
      onFiltersChange={(...args) =>
        console.log('onFiltersChange', ...args)
      }
      onRemoveFilter={(...args) =>
        console.log('onRemoveFilter', ...args)
      }
      rows={rows}
      searchFilters
      isDataFilter
    />
  );
};

const ToggleCell = ({
  customHandlers: { onToggle = () => {} },
  metaData: { rowData },
  activeField,
}) => {
  const isChecked = get(rowData, activeField);
  const onChange = useCallback((event) => {
    event.stopPropagation();
    onToggle(rowData);
  }, []);
  return <DSToggle checked={isChecked} onChange={onChange} />;
};
