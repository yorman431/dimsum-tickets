import React from 'react';
import DSComboBox from '@elliemae/ds-basic/dscombobox';

const options = [
  { value: 'Borrower', label: 'Borrower' },
  { value: 'Co-Borrower', label: 'Co-Borrower' },
  { value: 'Both', label: 'Both' },
];

const OwnerComboBox = ({ value, onValue, rowData }) => {
  return (
    <DSComboBox
      autoFocus
      menuIsOpen
      onBlur={() => onValue(value === 'Yes')}
      onChange={(val) => onValue(val, rowData)}
      options={options}
      value={value === 'Yes'}
    />
  );
};

const OverTimeComboBox = ({ value, onValue, rowData }) => {
  return (
    <DSComboBox
      autoFocus
      menuIsOpen
      onBlur={() => onValue(value === 'Yes')}
      onChange={(val) => onValue(val, rowData)}
      options={options}
      value={value === 'Yes'}
    />
  );
};

export default [
  {
    property: 'name',
    label: 'Name',
    editable: true,
    sortable: true,
    resizable: true,
  },
  {
    property: 'owner',
    label: 'Owner',
    editable: true,
    resizable: true,
    sortable: true,
    customEditor: OwnerComboBox,
  },
  {
    property: 'salary',
    label: 'Salary',
    editable: true,
    searchable: true,
    sortable: true,
    resizable: true,
  },
  {
    property: 'monthly',
    label: 'Monthly',
    editable: true,
    sortable: true,
    resizable: true,
  },
  {
    property: 'overtime',
    label: 'Overtime',
    editable: true,
    resizable: true,
    customEditor: OverTimeComboBox,
  },
];
