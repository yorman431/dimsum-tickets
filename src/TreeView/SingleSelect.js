import React, { useState, useRef, useEffect } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  SearchableTreePlugin,
  // TreeDndPlugin,
  // TreeToolbarPlugin
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import DSCheckbox from '@elliemae/ds-basic/form/Checkbox';
import { TreeToolbar } from '../components/TreeToolbar';
import { TreeContainer } from '../components/TreeContainer';
import { randomEntitiesNoChildren } from '../utils/randomTreeNodes';
import { useTreeProps } from './customHooks/useTreeProps';
// import { TooltipTextProvider } from "@elliemae/ds-basic/TruncatedTooltipText";
// import renderToolbar from "./renderToolbar";

const nodes = randomEntitiesNoChildren(1000);

const onItemClick = (item) => {
  console.log(111, item);
};

const SingleSelect = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { disableGroups, toggleDisableGroups } = useTreeProps();

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
    <TreeContainer>
      <DSCheckbox
        checked={disableGroups}
        labelText="Disable Groups"
        onChange={toggleDisableGroups}
      />
      <TreeToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TreeView
        data={nodes}
        fluid
        instanceRef={ref}
        groupIcon={<Folder />}
        isSingleSelect
        itemIcon={<FilePdf />}
        disableGroups={disableGroups}
        // labelRenderer={value => value}
        // onOrderChange={setData}
        onItemClick={onItemClick}
        plugins={[SelectablePluginTree, SearchableTreePlugin]}
        // renderToolbar={renderToolbar}
        searchQuery={searchQuery}
        showChildrenAmount
        // sortable
        // width={400}
      />
    </TreeContainer>
  );
};

export default SingleSelect;
