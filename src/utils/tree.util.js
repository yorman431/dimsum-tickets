import get from 'lodash/get';

// Meant to hold any reusable functionality related to dimsum's tree view component

/**
 * Verifies if the parent element has selected children
 *
 * @param {object} param all params
 * @param {object} param.hash { [id]: ... } all tree elements in a hash object
 * @param {Array} param.selectedItems The selected items, must include parent key { parent, ... }
 * @param {object} param.acc { items (object), parents (array) }
 * items: all selected elements
 * @param {string} param.parentId The parent identifier
 * @param {boolean} param.mixed Allows marking the selection as indeterminate
 * @returns {object} Same *acc* with the correct parent selected state { items (object), parents (array) }
 */
export const evalParent = ({
  hash,
  selectedItems,
  acc,
  parentId,
  mixed = false,
}) => {
  const parent = hash[parentId];
  acc.parents.push(parent);
  let selectedChilds = selectedItems.filter(
    (child) => child.parent === parentId,
  );
  selectedChilds = selectedChilds.concat(
    acc.parents.filter((child) => child.parent === parentId),
  );
  if (parent.children.length > 0) {
    let newMixed = mixed;
    if (parent.children.length === selectedChilds.length && !mixed) {
      acc.items[parentId] = true; // mark as selected
    } else {
      acc.items[parentId] = 'mixed';
      newMixed = true; // mark as indterminate
    }
    if (parent.parent && !acc.items[parent.parent]) {
      return evalParent({
        hash,
        selectedItems,
        acc,
        parentId: parent.parent,
        mixed: newMixed,
      });
    }
  }
  return acc;
};

/**
 * HOF that returns a mapper for selected items ids from TreeView's state.
 * Can provide a filter for each of the selected elements
 *
 * @example <caption> Returned Function Usage </caption>
 * getSelectedItems((item) => item.type === 'task'); // only getting task elements
 * @param {*} treeViewRef The tree view component's reference
 * @param {*} allItems All tree records/items in a key hash
 * @returns {Function} The getSelectedItems function that receives an optional filter function
 */
export const selectedItemsMapper = (treeViewRef, allItems) => (
  filterFn = () => true,
  selectedIds = get(treeViewRef, 'current.state.selection', {}), // check this object, could be some timing issues with the selection
) => {
  // Timeout is used to get new state from the treeview
  const selectedItems = Object.keys(selectedIds).reduce(
    (items, id) => {
      if (id === 'all' || !selectedIds[id]) return items;
      const item = allItems[id];
      if (!item || !filterFn(item)) return items;
      items.push(item);
      return items;
    },
    [],
  );
  return selectedItems;
};
