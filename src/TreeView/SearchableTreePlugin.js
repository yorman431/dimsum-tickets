import createInstancePlugin from '@elliemae/ds-shared/createDataInstance/createInstancePlugin';
import Highlighter from 'react-highlight-words';
import React from 'react';
import usePrevious from '@elliemae/ds-utilities/hooks/usePrevious';
const markParentsAsChildMatch = (record) => {
  let currRecord = record;
  while (currRecord.parentNode) {
    currRecord.parentNode.childMatch = true;
    currRecord = currRecord.parentNode;
  }
};
function transformRecords(records, instance) {
  const list = document.querySelector('[data-testid="tree-list"]');
  const {
    props: { searchQuery },
  } = instance.getInstance();
  if (!searchQuery) return records;
  // Scroll the list to the top once the search is triggered
  if (list && list.scrollTop) list.scrollTop = 0;
  return records.filter(
    (record) => record.selfMatch || record.childMatch,
  );
}
transformRecords.order = 0;
function transformRecord(record, instance) {
  const {
    props: { searchQuery },
    getItemLabel,
  } = instance.getInstance();
  if (
    searchQuery &&
    getItemLabel(record)
      .toLowerCase()
      .indexOf(searchQuery.toLowerCase()) !== -1
  ) {
    markParentsAsChildMatch(record);
    // eslint-disable-next-line no-param-reassign
    record.selfMatch = true;
  }
  return record;
}
transformRecord.order = 0;
const itemRenderer = (value, itemProps, instance) => {
  const {
    props: { searchQuery, showHighlight = true },
  } = instance.getInstance();
  if (!showHighlight || !searchQuery) return value;
  return (
    <Highlighter
      autoEscape
      highlightClassName="tree-text-highlight"
      searchWords={[searchQuery]}
      textToHighlight={value}
    />
  );
};
itemRenderer.order = 0;
export const SearchableTreePlugin = createInstancePlugin(
  'searchable-tree',
  {
    instance: (instance) => {
      const {
        props: { searchQuery },
      } = instance;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const prevSearchQuery = usePrevious(searchQuery);
      return {
        prevSearchQuery,
      };
    },
    shouldWalkChildren: (record, instance) => {
      const {
        props: { searchQuery },
      } = instance.getInstance();
      return !!searchQuery;
    },
    record: transformRecord,
    records: transformRecords,
    itemRenderer,
  },
);
