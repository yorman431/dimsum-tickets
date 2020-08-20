import { random } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export const randomEntity = (parentID) => {
  const id = uuidv4();
  const isGroup = random(0, 4) < 1;
  const children = isGroup
    ? randomEntities(random(0, 5), id)
    : undefined;
  return {
    id,
    name: `${random(0, 1) > 0 ? 'John Doe' : 'Jon Snow'} ${id}`,
    type: isGroup ? 'group' : 'single',
    parent: parentID,
    children,
  };
};
export const randomEntities = (count, parentID) =>
  new Array(count).fill(0).map(() => {
    return randomEntity(parentID);
  });

/** With increased chances of getting no children group */
export const randomEntityNoChildren = () => {
  const id = uuidv4();
  const isGroup = random(0, 4) < 2;
  let children = isGroup
    ? randomEntities(random(0, 2), id)
    : undefined;
  if (random(0, 4) < 2) children = [];
  return {
    id,
    name: `${random(0, 1) > 0 ? 'John Doe' : 'Jon Snow'} ${id}`,
    type: isGroup ? 'group' : 'single',
    children,
    isGroup,
  };
};
/** With increased chances of getting no children groups */
export const randomEntitiesNoChildren = (count) =>
  new Array(count).fill(0).map(() => {
    return randomEntityNoChildren();
  });
