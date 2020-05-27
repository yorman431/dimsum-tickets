import React, { useEffect, useState } from "react";
import {
  TreeView,
  SelectablePluginTree
} from "@elliemae/ds-treeview";
import Folder from "@elliemae/ds-icons/Folder";
import FilePdf from "@elliemae/ds-icons/FilePdf";
import tickets from './tickets';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import DSSeparator from "@elliemae/ds-basic/Separator"
import DSSpinner from "@elliemae/ds-basic/Spinner"

const renderTicket = (path) => Loadable({
  loader: () => import(`./${path}`).catch(() => import('./NotFound')),
  loading: DSSpinner,
});

const StyledDiv = styled.div`
  display: flex !important;
  height: 96%;
`
const TicketView = styled.div`
  width: 100%;
`

const MainLayout = () => {
  const [selectedTicket, setSelectedTicket] = useState('');

  const onItemClick = item => {
    if (item.type === 'group' || !item.path) return;
    setSelectedTicket(item.path);
  };

  const Ticket = renderTicket(selectedTicket);

  return (
    <StyledDiv>
      <TreeView
          data={tickets}
          fluid
          groupIcon={<Folder />}
          itemIcon={<FilePdf />}
          onItemClick={onItemClick}
          plugins={[SelectablePluginTree]}
          showChildrenAmount
          width={256}
        />
      <DSSeparator orientation="vertical" style={{ height: `${window.innerHeight - 80}px` }} />
      {selectedTicket && (
        <TicketView>
          <Ticket />
        </TicketView>
      )}
    </StyledDiv>
  );
};

export default MainLayout;
