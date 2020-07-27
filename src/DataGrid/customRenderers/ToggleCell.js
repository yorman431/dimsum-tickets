import React, { useCallback } from 'react';
import DSToggle from '@elliemae/ds-basic/form/Toggle';
import PropTypes from 'prop-types';
import { get } from 'lodash';

const ToggleCell = ({
  customHandlers: { onToggle = () => {} },
  metaData: { rowData },
  entityType = 'workflow-rule',
  activeField = 'active',
}) => {
  const { id } = rowData;
  const isChecked = get(rowData, activeField);
  const dataProps = {
    'data-testid': `${entityType}-${activeField}-toggle`,
    [`data-${entityType}Id`]: id,
    containerProps: {
      'data-testid': `${entityType}-${activeField}-toggle-container`,
    },
  };
  const onChange = useCallback(
    (event) => {
      event.stopPropagation();
      onToggle(rowData);
    },
    [onToggle, rowData],
  );
  return (
    <DSToggle
      {...dataProps}
      checked={isChecked}
      onChange={onChange}
    />
  );
};
ToggleCell.propTypes = {
  customHandlers: PropTypes.shape({
    onToggle: PropTypes.func,
  }),
  metaData: PropTypes.shape({
    rowData: PropTypes.object,
  }),
  entityType: PropTypes.string.isRequired,
  activeField: PropTypes.string,
  theme: PropTypes.object,
};

export default ToggleCell;
