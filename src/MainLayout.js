import React, { useState } from 'react';
import {
  TreeView,
  SelectablePluginTree,
} from '@elliemae/ds-treeview';
import Folder from '@elliemae/ds-icons/Folder';
import FilePdf from '@elliemae/ds-icons/FilePdf';
import tickets from './tickets';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import DSSeparator from '@elliemae/ds-basic/Separator';
import DSSpinner from '@elliemae/ds-basic/Spinner';
import pkg from '../package.json';
import { mapPathsToExpandedRows } from './utils/tree.util';

const renderTicket = (path) =>
  Loadable({
    loader: () =>
      import(`./${path}`).catch(() => import('./NotFound')),
    loading: DSSpinner,
  });

const StyledDiv = styled.div`
  display: flex !important;
  height: 100%;
`;
const TicketView = styled.div`
  width: 100%;
`;
const StyledLabel = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`;
const TreeContainer = styled.div`
  height: calc(100% - 48px);
`;

const MainLayout = () => {
  const path = window.location.pathname?.substring(16);
  const [selectedTicket, setSelectedTicket] = useState(path);

  const onItemClick = (item) => {
    if (item.type === 'group' || !item.id) return;
    setSelectedTicket(item.id);
    // to keep it simple as we don't need routing
    if (window.location.hostname === 'localhost') {
      window.history.pushState(
        null,
        null,
        `/dimsum-tickets/${item.id}`,
      );
    }
    console.log(item.id, window.location);
  };

  const Ticket = renderTicket(selectedTicket);

  return (
    <StyledDiv>
      <TreeContainer>
        <StyledLabel>
          Select a ticket to render on the right pane
        </StyledLabel>
        <StyledLabel>
          {pkg.dependencies['@elliemae/ds-basic']}
        </StyledLabel>
        <TreeView
          data={tickets}
          fluid
          groupIcon={<Folder />}
          itemIcon={<FilePdf />}
          onItemClick={onItemClick}
          plugins={[SelectablePluginTree]}
          showChildrenAmount
          width={256}
          selection={{ [selectedTicket]: true }}
          expandedRows={mapPathsToExpandedRows(path)}
        />
      </TreeContainer>
      <DSSeparator
        orientation="vertical"
        style={{ height: `${window.innerHeight - 20}px` }}
      />
      {selectedTicket && (
        <TicketView>
          <Ticket />
        </TicketView>
      )}
    </StyledDiv>
  );
};

export default MainLayout;
