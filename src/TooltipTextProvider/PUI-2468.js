import React from "react";
// import DSFormItemLayout from "@elliemae/ds-basic/form/FormItem";
import { TooltipTextProvider } from "@elliemae/ds-basic/TruncatedTooltipText";
import DSTextBox from "@elliemae/ds-basic/form/TextBox";
import { StyledFormItemLayout } from "../components/styled";

export default () => (
  <TooltipTextProvider data-testid="task-details-form">
    <StyledFormItemLayout
      ariaLabel="Task name"
      containerProps={{
        "data-testid": "task-name"
      }}
      inputComponent={DSTextBox}
      labelText="Task Name"
      placeholder="Task name"
      value="A very long text that gets always visible in a tooltip"
    />
  </TooltipTextProvider>
);
