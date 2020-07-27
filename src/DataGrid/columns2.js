import React from 'react';
import CommentsCell, {
  CommentsCellHeader,
} from './customRenderers/CommentsCell';
import ToggleCell from './customRenderers/ToggleCell';
import { camelCase } from 'lodash';

const defaultCol = (label = 'label') => ({
  property: camelCase(label),
  label,
  visible: true,
  searchable: true,
  sortable: true,
  resizable: true,
});

const entityType = 'workflow-rules';

export default [
  {
    ...defaultCol('name'),
    width: '19%',
  },
  {
    ...defaultCol('event'),
    width: '15%',
  },
  {
    ...defaultCol('conditions'),
    width: '19%',
  },
  {
    ...defaultCol('result'),
    width: '15%',
  },
  {
    ...defaultCol('active'),
    customRenderer: (props) => (
      <ToggleCell
        {...props}
        entityType={entityType}
        activeField="active"
      />
    ),
    width: 64,
  },
  {
    ...defaultCol('comments'),
    customRenderer: CommentsCell,
    header: {
      formatters: [CommentsCellHeader],
    },
    headerStyle: { justifyContent: 'center' },
    cellStyle: { justifyContent: 'center' },
    width: '4%',
  },
  {
    ...defaultCol('modified date'),
    width: '14%',
  },
];
