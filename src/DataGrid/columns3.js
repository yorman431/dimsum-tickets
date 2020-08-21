import React from 'react';
import ToggleCell from './customRenderers/ToggleCell';
import { camelCase } from 'lodash';

const defaultCol = (label = 'label') => ({
  property: camelCase(label),
  label,
  visible: true,
  searchable: true,
  sortable: true,
  resizable: true,
  valueTransformation: (value = '') => value,
});

export default [
  {
    ...defaultCol('name'),
  },
  {
    ...defaultCol('in e folder'),
    customRenderer: (props) => (
      <ToggleCell {...props} activeField="inFolderE" />
    ),
    width: 64,
    filterOptions: [
      { id: 'true', label: 'Active' },
      { id: 'false', label: 'Inactive' },
    ],
    valueTransformation: (value) => !!value,
  },
  {
    ...defaultCol('salary'),
  },
  {
    ...defaultCol('monthly'),
  },
];
