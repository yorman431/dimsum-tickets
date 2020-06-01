import React, { memo } from 'react';
import {
  DSPageHeaderV2,
  PageHeaderTitle,
  PageHeaderSummary,
} from '@elliemae/ds-basic/PageHeader';

const WorkflowRulesHeader = () => (
  <DSPageHeaderV2
    pageTitle={<PageHeaderTitle>Automation Rules</PageHeaderTitle>}
    summary={
      <PageHeaderSummary
        label="Rules"
        value={0}
        data-testid="workflow-rules-header-summary"
      />
    }
  />
);

export default memo(WorkflowRulesHeader);
