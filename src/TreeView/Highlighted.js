import React, { useState, useRef } from 'react';
import {
  TreeView,
  SelectablePluginTree,
} from '@elliemae/ds-treeview';
import DSSeparator from '@elliemae/ds-basic/Separator';
import { DSCard, DSCardHeader, DSCardBody } from '@elliemae/ds-basic';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import styled from 'styled-components';
import { modifiedNodes as nodes } from './nodes';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

let items = nodes.slice();
nodes.forEach((node) => {
  if (node.children.length > 0) items.push(node.children);
});

const Highlighted = () => {
  const [selectedOnChange, setSelectedOnChange] = useState({});
  const [selected, setSelected] = useState(false);
  const [clicked, setClicked] = useState({});
  const instanceRef = useRef(null);

  const handleSelectedOnChange = (item) => {
    setSelectedOnChange(
      items.flat().filter((node) => {
        return node.id == Object.keys(item);
      })[0],
    );
  };

  return (
    <Container>
      <Container>
        <TreeView
          data={nodes}
          fluid
          instanceRef={instanceRef}
          groupIcon={<Folder />}
          itemIcon={<FilePdf />}
          onItemClick={setClicked}
          plugins={[SelectablePluginTree]}
          // showChildrenAmount
          onSelect={setSelected}
          width={256}
          // selection={clicked}
          onSelectionChange={handleSelectedOnChange}
        />
      </Container>
      <DSSeparator
        orientation="vertical"
        style={{ height: `100%` }}
      />
      <div style={{ maxWidth: '400px', padding: '1rem' }}>
        <DSCard>
          <DSCardHeader title="Item from onItemClick prop" />
          <DSCardBody>
            {clicked.id && (
              <div>
                <p>ID: {clicked.id} </p>
                <p>Name: {clicked.name}</p>
              </div>
            )}
          </DSCardBody>
        </DSCard>
        <DSSeparator orientation="horizontal" />
        <DSCard>
          <DSCardHeader title="Item from onSelectionChange prop" />
          <DSCardBody>
            {selectedOnChange.id && (
              <div>
                <p>ID: {selectedOnChange.id} </p>
                <p>Name: {selectedOnChange.name}</p>
              </div>
            )}
          </DSCardBody>
        </DSCard>
        <DSSeparator orientation="horizontal" />
        <DSCard>
          <DSCardHeader title="Item from onSelect prop" />
          <DSCardBody>
            {selected.id && (
              <div>
                <p>ID: {selected.id} </p>
                <p>Name: {selected.name}</p>
              </div>
            )}
          </DSCardBody>
        </DSCard>
      </div>
    </Container>
  );
};

export default Highlighted;
