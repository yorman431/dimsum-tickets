import React, { memo } from 'react';
import {
  DSPageHeaderV2,
  PageHeaderTitle,
} from '@elliemae/ds-basic/PageHeader';
import ThreeButtonsToolbar from './Toolbars/ThreeButtonsToolbar';

const WorkflowRulesHeader = () => (
  <DSPageHeaderV2
    pageTitle={<PageHeaderTitle>Automation Rules</PageHeaderTitle>}
    toolbar={<ThreeButtonsToolbar />}
  />
);

export default memo(WorkflowRulesHeader);
