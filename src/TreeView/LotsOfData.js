import React, { useRef, useState } from 'react';
import {
  TreeView,
  SelectablePluginTree,
  SearchableTreePlugin,
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import SearchBox from '@elliemae/ds-basic/form/SearchBox';
import DSToolbar from '@elliemae/ds-basic/Toolbar';
import DSSeparator from '@elliemae/ds-basic/Separator';
import { randomEntities } from '../utils/randomTreeNodes';

const nodes = randomEntities(2500);

const LotsOfElements = () => {
  const instanceRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div style={{ height: '100%' }}>
        <DSToolbar withDepth={false}>
          {/* <DSButton
            buttonType='secondary'
            labelText='Toggle Expand'
            onClick={() => instanceRef.current.actions.toggleExpandAll()}
          /> */}
          <SearchBox
            clearable
            containerProps={{ 'data-testid': 'tree-searchbox' }}
            onSearch={({ value }) => setSearchQuery(value)}
            placeholder="Search all"
            searchOnEnter={false}
            value={searchQuery}
          />
        </DSToolbar>
        <DSSeparator
          margin="none"
          orientation="horizontal"
          type="non-form"
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
    </>
  );
};

export default LotsOfElements;
