import React, { memo } from 'react';
import DSToolbar from '@elliemae/ds-basic/Toolbar';
import DSButton from '@elliemae/ds-basic/Button';

const ThreeButtonsToolbar = () => (
  <DSToolbar withDepth={false}>
    <DSButton
      data-testid="workflow-rules-toggle-rules"
      labelText="Activate/Deactivate"
    />
    <DSButton
      data-testid="workflow-rules-delete-rules"
      labelText="Delete"
    />
    <DSButton
      data-testid="workflow-rules-add-rule"
      labelText="New Rule"
    />
  </DSToolbar>
);

export default memo(ThreeButtonsToolbar);
