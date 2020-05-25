import React, { useRef, useState } from "react";
import { TreeView, SelectablePluginTree } from "@elliemae/ds-treeview";
import Folder from "@elliemae/ds-icons/Folder";
import FilePdf from "@elliemae/ds-icons/FilePdf";
import nodes from "./nodes";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
`;

const selectTaskEntity = item => {
  console.log("Some selection logic here");
};

const clearSelectedTask = () => {
  console.log("Some clear selection logic here");
};

const Tree = () => {
  const [data, setData] = useState(nodes);
  const instanceRef = useRef(null);
  const [selectedItemId, setSelectedItemId] = useState("");

  const onItemClick = item => {
    let callActions;
    if (selectedItemId !== item.id) {
      // Selecting a different entity
      callActions = true;
      setSelectedItemId(item.id);
    } else if (instanceRef.current.state.selection[item.id]) {
      // Deselect
      clearSelectedTask();
    } else callActions = true; // selecting the same that was previously selected
    if (callActions) selectTaskEntity(item);
  };

  return (
    <StyledDiv>
      <TreeView
        data={data}
        fluid
        groupIcon={<Folder />}
        instanceRef={instanceRef}
        itemIcon={<FilePdf />}
        onOrderChange={setData}
        // onToggleExpand={item => {
        //   instanceRef.current.actions.toggleExpand(item, {
        //     expandAllChildren: true
        //   });
        // }}
        onItemClick={onItemClick}
        plugins={[SelectablePluginTree]}
        showChildrenAmount
        sortable
      />
    </StyledDiv>
  );
};

export default Tree;
