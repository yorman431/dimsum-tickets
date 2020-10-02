/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';

/**
 * Provides reusable search functionality
 *
 * @param data.initialSearchText
 * @param data.filters
 * @param data.setFilters
 * @param data.inputProps
 * @param data.onSearch
 * @param data.searchOnKeyUp
 */
export const useInputSearch = ({
  initialSearchText = '',
  filters = [],
  setFilters,
  inputProps = {},
  onSearch,
  searchOnKeyUp = false,
}) => {
  const [updateSearch, setUpdateSearch] = useState(0); // Allows to update filters in real time
  const [searchInputValue, setSearchInputValue] = useState(
    initialSearchText,
  );
  const reRenderSearch = () => setUpdateSearch((value) => value + 1);
  const clearSearch = () => setSearchInputValue(initialSearchText);
  const handleSearch = useCallback(
    ({ value, key }) => {
      if (!value.trim()) {
        if (key === 'Backspace') setFilters(filters);
        return;
      }
      onSearch(value);
      if (searchOnKeyUp) setSearchInputValue(value);
      else clearSearch();
    },
    [updateSearch],
  );
  const onKeyUp = useCallback(
    ({ target: { value }, key }) => {
      if (key === 'Enter') reRenderSearch();
      else if (!searchOnKeyUp) return;
      handleSearch({ value, key });
    },
    [handleSearch],
  );

  return {
    searchProps: {
      ...inputProps,
      onKeyUp,
      onSearch: handleSearch,
      value: searchInputValue,
    },
    shouldUpdateSearch: updateSearch,
    updateSearch: reRenderSearch,
    clearSearch,
  };
};
