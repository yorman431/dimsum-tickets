import React, { useState, useRef, useEffect } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  // TreeDndPlugin,
  // TreeToolbarPlugin
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import { useTreeInitialSelectionState } from '../customHooks/useTreeInitialSelectionState';
import { randomEntities } from '../../utils/randomTreeNodes';
// import { TooltipTextProvider } from "@elliemae/ds-basic/TruncatedTooltipText";
// import renderToolbar from "./renderToolbar";

const nodes = randomEntities(50);

const onItemClick = (item) => {
  console.log(111, item);
};

const Overview = () => {
  const [data] = useState(nodes);
  const selectionHash = useTreeInitialSelectionState(nodes, [
    nodes[40],
  ]);
  const ref = useRef(null);

  const expandAll = () => {
    const toggleExpandAll = ref.current.actions.toggleExpandAll;
    console.log('REF', ref.current);
    if (toggleExpandAll) toggleExpandAll();
  };

  useEffect(() => {
    expandAll();
  }, []);

  return (
    <TreeView
      data={data}
      fluid
      instanceRef={ref}
      groupIcon={<Folder />}
      itemIcon={<FilePdf />}
      selection={selectionHash}
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
