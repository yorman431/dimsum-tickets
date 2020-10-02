import React, { useState, useCallback } from 'react';
import { unionBy } from 'lodash';
import DSButton from '@elliemae/ds-basic/Button';
import { useInputSearch } from './useInputSearch';

export const useFilters = (
  data,
  baseFilter = { label: 'Name', group: 'name', operator: 'contains' },
) => {
  const [filters, setFilters] = useState([]);
  const onSearch = (val) => {
    const value = typeof val === 'string' ? val : val.value; // dimsum's API is inconsistent
    setFilters(unionBy(filters, [{ ...baseFilter, value }], 'value'));
  };
  const { searchProps, clearSearch, updateSearch } = useInputSearch({
    filters,
    setFilters,
    onSearch,
    inputProps: { disabled: !data.length },
  });
  const onRemoveFilter = useCallback(
    (_, val) => {
      setFilters(filters.filter((f) => f.value !== val));
      if (filters.some((f) => f.value === searchProps.value)) {
        clearSearch();
      }
      updateSearch();
    },
    [clearSearch, filters, searchProps.value, updateSearch],
  );
  const onClearFilters = useCallback(() => {
    setFilters([]);
    clearSearch();
    updateSearch();
  }, [clearSearch, updateSearch]);
  const renderFilterToolbar = useCallback(
    () => (
      <DSButton
        buttonType="text"
        labelText="CLEAR"
        onClick={onClearFilters}
      />
    ),
    [onClearFilters],
  );
  return {
    filters,
    onRemoveFilter,
    onClearFilters,
    renderFilterToolbar,
    onSearch,
  };
};
