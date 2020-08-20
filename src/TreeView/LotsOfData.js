import React, { useRef, useState } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  SearchableTreePlugin,
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import { TreeToolbar } from '../components/TreeToolbar';
import { randomEntities } from '../utils/randomTreeNodes';
import { TreeContainer } from '../components/TreeContainer';

const nodes = randomEntities(2500);

const LotsOfElements = () => {
  const instanceRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <TreeContainer offsetHeight={48}>
      <div style={{ height: '100%' }}>
        <TreeToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TreeView
          data={nodes}
          fluid
          groupIcon={<Folder />}
          instanceRef={instanceRef}
          isMultiSelect
          itemIcon={<FilePdf />}
          // onToggleExpand={(item) => {
          //   instanceRef.current.actions.toggleExpand(item, {
          //     expandAllChildren: true,
          //   });
          // }}
          plugins={[SelectablePluginTree, SearchableTreePlugin]}
          searchQuery={searchQuery}
          showChildrenAmount
          sortable
        />
      </div>
    </TreeContainer>
  );
};

export default LotsOfElements;
