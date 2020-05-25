import { random } from "lodash";
import uuidv4 from "uuid/v4";

const groups = ["North", "South", "East", "West"];

export const randomEntity = () => {
  const monthly = random(1500, 3500, true).toFixed(2);
  const id = uuidv4();
  const group = groups[random(0, 3)];
  return {
    id,
    name: `${random(0, 1) > 0 ? "John Doe" : "Jon Snow"} ${id}`,
    owner: ["Borrower", "Co-Borrower", "Both"][random(0, 2)],
    salary: (monthly * 12).toFixed(2),
    monthly,
    overtime: random(20, 800, true).toFixed(2),
    bonuses: random(20, 500, true).toFixed(2),
    commission: random(20, 25000, true).toFixed(2),
    other: random(20, 1000, true).toFixed(2),
    text: "Some random very long text",
    inFolderE: random(0, 1) > 0,
    group
  };
};
export const randomEntities = count =>
  new Array(count).fill(0).map(() => {
    return randomEntity();
  });
export const randomGroupedEntities = count => {
  const entities = randomEntities(count);
  return groups
    .map(g => ({
      group: g,
      children: entities.filter(entity => entity.group === g)
    }))
    .filter(g => g.children.length);
};
