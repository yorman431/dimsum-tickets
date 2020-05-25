import React, { useRef, useState } from "react";
import {
  TreeView,
  SelectablePluginTree,
  SearchableTreePlugin
} from "@elliemae/ds-treeview";
import Folder from "@elliemae/ds-icons/Folder";
import FilePdf from "@elliemae/ds-icons/FilePdf";
// import DSButton from '@elliemae/ds-basic/Button'
// import { ToolbarGroup } from "@elliemae/ds-basic";
import { SearchBoxToggle } from "@elliemae/ds-basic/form/SearchBox";
import DSToolbar from "@elliemae/ds-basic/Toolbar";
import DSSeparator from "@elliemae/ds-basic/Separator";

const node = {
  id: "fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",
  name: "BridgeServices_RegressionSuite_QA (2)",
  type: "taskgroup",
  parent: undefined,
  children: [
    {
      id: "4548a528-a0b2-4ee5-8fb3-94628e3320a6",
      name: "Test123 (1)",
      type: "task",
      parent: "fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",
      children: []
    },
    {
      id: "0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",
      name: "Test (1)",
      type: "task",
      parent: "fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",
      children: []
    }
  ]
};

const Searchable = () => {
  const [data, setData] = useState(node.children);
  const instanceRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div style={{ width: 270, height: "100%" }}>
        <DSToolbar withDepth={false}>
          {/* <DSButton
            buttonType='secondary'
            labelText='Toggle Expand'
            onClick={() => instanceRef.current.actions.toggleExpandAll()}
          /> */}
          <SearchBoxToggle
            clearable
            containerProps={{ "data-testid": "tree-searchbox" }}
            onSearch={({ value }) => setSearchQuery(value)}
            placeholder="Search all"
            searchOnEnter={false}
            value={searchQuery}
          />
        </DSToolbar>
        <DSSeparator margin="none" orientation="horizontal" type="non-form" />
        <TreeView
          data={data}
          fluid
          groupIcon={<Folder />}
          instanceRef={instanceRef}
          isMultiSelect
          itemIcon={<FilePdf />}
          onOrderChange={setData}
          onToggleExpand={item => {
            instanceRef.current.actions.toggleExpand(item, {
              expandAllChildren: true
            });
          }}
          plugins={[SelectablePluginTree, SearchableTreePlugin]}
          searchQuery={searchQuery}
          showChildrenAmount
          sortable
        />
      </div>
    </>
  );
};

export default Searchable;
