import React, { useRef, useState } from 'react';
import {
  TreeView,
  SelectablePluginTree,
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import Tasks from '@elliemae/ds-icons/Tasks';
import { getDeepNodes } from './nodes';

const Tree = () => {
  const instanceRef = useRef(null);
  const [data, setData] = useState(getDeepNodes());
  const [selection, setSelection] = useState({});
  const onSelectionChange = (selectedIds) => {
    const newItems = Object.keys(selectedIds).reduce((items, id) => {
      if (id === 'all' || !selectedIds[id]) return items;
      const item = data.find((x) => x.id === id);
      if (!item) return items;
      items.push(item);
      return items;
    }, []);

    const newSelection = Object.assign(
      {},
      ...newItems.map(({ id }) => ({ [id]: false })),
    );

    setSelection(newSelection);
  };

  return (
    <TreeView
      fluid
      nameKey="label"
      groupIcon={<Folder />}
      itemIcon={<Tasks />}
      plugins={[SelectablePluginTree]}
      showChildrenAmount
      data={data}
      selection={selection}
      instanceRef={instanceRef}
      onSelectionChange={onSelectionChange}
      isMultiSelect
      disableLeafs
    />
  );
};

export default Tree;
