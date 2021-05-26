import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import columns from './columns';
import { randomGroupedEntities } from '../utils/randomData';
import { useFilters } from './customHooks/useFilters';
import {
  DSPageHeaderV2,
  PageHeaderTitle,
} from '@elliemae/ds-basic/PageHeader';
import { ToolbarGroup } from '@elliemae/ds-basic';
import DSToolbar from '@elliemae/ds-basic/Toolbar';
import DSSearchBox from '@elliemae/ds-basic/form/SearchBox';

const groupedRows = randomGroupedEntities(10);

const onSelectRow = (a, b, c) => {
  console.log(a, b, c);
};

export default () => {
  const {
    filters,
    onRemoveFilter,
    renderFilterToolbar,
    onSearch,
  } = useFilters(groupedRows);
  return (
    <>
      <DSPageHeaderV2
        pageTitle={<PageHeaderTitle>Groups Example</PageHeaderTitle>}
        toolbar={
          <DSToolbar withDepth={false}>
            <ToolbarGroup>
              <DSSearchBox
                placeholder="Search"
                searchOnEnter
                // clearOnSearch={clearOnSearch}
                // onKeyUp={onKeyUp}
                onSearch={onSearch}
                // onBlur={onBlur}
                // onChange={onChange}
                // value={value}
                // showIcon={showIcon}
              />
            </ToolbarGroup>
          </DSToolbar>
        }
      />
      <DSDataGrid
        onSelectRow={onSelectRow}
        columns={columns}
        rows={groupedRows}
        searchFilters
        filters={filters}
        onRemoveFilter={onRemoveFilter}
        renderFilterToolbar={renderFilterToolbar}
        sortable
        selectable="single"
        showSelectColumn={false}
        autoHeight
        resizeableColumns
        getChildrenRows={({ rowData }) => rowData.children}
        groupedRows
        groupedRowsRenderHeader={(rowData) => {
          const { group } = rowData || {};
          return <> Group : {group} </>;
        }}
      />
    </>
  );
};
