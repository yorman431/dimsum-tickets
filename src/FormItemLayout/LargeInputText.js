import React, { useState } from "react";
import DSLargeInputText from "@elliemae/ds-basic/dslargeinputtext";
import DSFormItemLayout from "@elliemae/ds-basic/form/FormItem";

export default () => {
  const [value, setValue] = useState();
  const handleChange = ({ target: { value } }) => setValue(value);
  return (
    <div>
      <DSLargeInputText
        characterLimitCounter={20}
        containerProps={{ id: "my-custom-id" }}
        maxLength={500}
        onChange={handleChange}
        rows={6}
        value={value}
      />
      <div style={{ height: "2rem" }} />
      <DSFormItemLayout
        containerProps={{ id: "my-custom-id" }}
        feedbackMessage="Some feedback from de user..."
        inputComponent={DSLargeInputText}
        labelText="Label text"
        onChange={handleChange}
        placeholder="Hint Text"
        value={value}
      />
    </div>
  );
};
