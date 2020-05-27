import React, { useState, useRef } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  // TreeDndPlugin,
  // TreeToolbarPlugin
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
// import { TooltipTextProvider } from "@elliemae/ds-basic/TruncatedTooltipText";
// import renderToolbar from "./renderToolbar";

const node = {
  id: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
  name: 'BridgeServices_RegressionSuite_QA (2)',
  type: 'taskgroup',
  parent: undefined,
  children: [
    {
      id: '4548a528-a0b2-4ee5-8fb3-94628e3320a6',
      name: 'Test123 (1)',
      type: 'task',
      parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
      children: [],
    },
    {
      id: '0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6',
      name: 'Test (1)',
      type: 'task',
      parent: 'fd28f6e5-d055-4ed8-b3f1-a4c2473876a4',
      children: [],
    },
  ],
};

const onItemClick = (item) => {
  console.log(111, item);
};

const Overview = () => {
  const [data] = useState(node.children);
  const ref = useRef(null);

  return (
    <TreeView
      data={data}
      fluid
      instanceRef={ref}
      groupIcon={<Folder />}
      // isMultiSelect
      itemIcon={<FilePdf />}
      // labelRenderer={value => value}
      // onOrderChange={setData}
      onItemClick={onItemClick}
      plugins={[SelectablePluginTree]}
      // renderToolbar={renderToolbar}
      // showChildrenAmount
      // sortable
      // width={400}
    />
  );
};

export default Overview;
