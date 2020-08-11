import { useEffect, useState } from 'react';
import { evalParent } from '../../utils/tree.util';

/**
 * Sets the initial selection state
 *
 * @param {object} allTreeItems hash object with all tree elements
 * @param {Array} items The initially selected items. Could be an array for multiSelect or a single object
 * @returns {object} The selections hash object, each key (id) representing a selected tree element
 */
export const useTreeInitialSelectionState = (
  allTreeItems,
  items = [],
) => {
  const [selectionHash, setSelectionHash] = useState({});

  useEffect(() => {
    let initialState = {};
    const selectedItems = Array.isArray(items) ? items : [items];
    if (selectedItems.length) {
      initialState = selectedItems.reduce(
        (acc, item) => {
          acc.items = { ...acc.items, [item.id]: true };
          if (item.parent && !acc.items[item.parent]) {
            return evalParent({
              hash: allTreeItems,
              selectedItems,
              acc,
              parentId: item.parent,
            });
          }
          return acc;
        },
        { items: [], parents: [] },
      );
    }
    setSelectionHash(initialState.items);
  }, [allTreeItems, items]);

  return selectionHash;
};
