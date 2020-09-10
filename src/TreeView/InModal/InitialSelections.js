import React from 'react';
import ToggleExpand from './ToggleExpand';
import { randomEntitiesMoreGroups } from '../../utils/randomTreeNodes';

const nodes = [
  {
    id: '1',
    name: `Initially Selected Group`,
    type: 'group',
    children: [
      {
        id: '2',
        name: `Element A`,
        type: 'group',
        children: [
          {
            id: '3',
            name: `First Child`,
            type: 'single',
            children: [],
          },
          {
            id: '4',
            name: `Second Child`,
            type: 'single',
            children: [],
          },
        ],
        isGroup: true,
      },
      {
        id: '5',
        name: `Element B`,
        type: 'group',
        children: [
          {
            id: '6',
            name: `First Child`,
            type: 'single',
            children: [],
          },
          {
            id: '7',
            name: `Second Child`,
            type: 'single',
            children: [],
          },
        ],
        isGroup: true,
      },
    ],
    isGroup: true,
  },
  ...randomEntitiesMoreGroups(100),
];

const selectionHash = {
  1: 'mixed',
  2: 'mixed',
  3: true,
  5: true,
  6: true,
  7: true,
};

export default () => (
  <ToggleExpand data={nodes} selection={selectionHash} />
);
