import React, { useRef, useState } from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import moment from 'moment';
import styled from 'styled-components';
import {
  DSPageHeaderV2,
  PageHeaderTitle,
} from '@elliemae/ds-basic/PageHeader';
import { ToolbarGroup } from '@elliemae/ds-basic';
import DSButton from '@elliemae/ds-basic/Button';
import DSToolbar from '@elliemae/ds-basic/Toolbar';
import { randomGroupedEntities } from '../utils/randomData';

const groupedRows = randomGroupedEntities(5);

const Ul = styled.ul`
  display: block;
  white-space: normal;
  word-break: break-word;
  padding-left: 1em;
`;

const Li = styled.li`
  margin-bottom: 8px;
`;

const columnsDef = [
  {
    property: 'name',
    label: 'NAME',
    searchable: true,
    sortable: true,
    resizable: true,
    width: 200,
  },
  {
    property: 'group',
    label: 'GROUP',
    sortable: true,
    resizable: true,
    width: 200,
  },
  {
    property: 'position',
    label: 'position',
    searchable: true,
    sortable: true,
    resizable: true,
    width: 200,
  },
  {
    type: 'number',
    property: 'price',
    label: 'PRICE',
    searchable: true,
    sortable: true,
    resizable: true,
    editable: true,
  },
];

export default function Virtualization10kRows() {
  const instanceRef = useRef(null);
  const [rows] = useState(groupedRows);
  const [columns] = useState(columnsDef);

  console.log('grouping', rows);

  return (
    <div>
      <DSPageHeaderV2
        pageTitle={
          <PageHeaderTitle>
            Lorem ipsum, or lip sum as it is sometimes known
          </PageHeaderTitle>
        }
        toolbar={
          <DSToolbar withDepth={false}>
            <ToolbarGroup>
              <DSButton
                buttonType="secondary"
                labelText="Toggle expand"
                onClick={() =>
                  instanceRef.current.actions.toggleExpandAllRows()
                }
                size="s"
              />
            </ToolbarGroup>
          </DSToolbar>
        }
      />
      <DSDataGrid
        autoHeight
        columns={columns}
        getChildrenRows={({ rowData }) => rowData.children}
        groupedRows
        groupedRowsRenderHeader={(rowData) => {
          const { name, id } = rowData || {};
          return (
            <>
              Group : {name} {id}
            </>
          );
        }}
        instanceRef={instanceRef}
        paginated
        renderExpandedDetails={(rowData) => {
          const { date } = rowData || {};
          const description = moment(date).format('Do MMM YYYY');
          return (
            <>
              <Ul>
                <Li>{description}</Li>
                <Li>
                  Requires a minimum *2-months PITI reserves for any
                  other Second Home or any 1-4 investment Property
                  owned
                </Li>
                <Li>
                  A foreclosure requires a seven-year waiting period
                  from the completion date of the foreclosure action.
                  A three-year waiting period is permitted if
                  extenuating circumstances can be documented.
                </Li>
                <Li>
                  If this is a Community Second the Subordinate
                  Financing LLPA does not apply.
                </Li>
                <Li>
                  Mortgage insurance adjustments may apply based on /r
                  coverage %. Please see Pricing Desk.
                </Li>
              </Ul>
            </>
          );
        }}
        resizeableColumns
        rowKey="id"
        rows={rows}
        rowSize="extend"
        searchFilters
        sortable
      />
    </div>
  );
}
