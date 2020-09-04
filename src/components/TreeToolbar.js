import React from 'react';
import SearchBox from '@elliemae/ds-basic/form/SearchBox';
import DSToolbar from '@elliemae/ds-basic/Toolbar';
import DSSeparator from '@elliemae/ds-basic/Separator';
import DSButton from '@elliemae/ds-basic/Button';

export const TreeToolbar = ({
  searchQuery,
  setSearchQuery,
  toggleExpandAll,
}) => {
  return (
    <>
      <DSToolbar withDepth={false}>
        {toggleExpandAll && (
          <DSButton
            buttonType="secondary"
            labelText="Toggle Expand"
            onClick={toggleExpandAll}
          />
        )}
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
    </>
  );
};
