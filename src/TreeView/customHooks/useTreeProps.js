import { useState } from 'react';

export const useTreeProps = () => {
  const [disableGroups, setDisableGroups] = useState(false);
  const toggleDisableGroups = () => setDisableGroups(!disableGroups);
  return { disableGroups, toggleDisableGroups };
};
