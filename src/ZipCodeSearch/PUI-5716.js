import React, { useState, memo } from "react";
import DSZipCodeSearch from "@elliemae/ds-basic/ZipCodeSearch";
import DSFormItemLayout from "@elliemae/ds-basic/form/FormItem";

const Component = () => {
  const [value, setValue] = useState();
  const [search, setSearch] = useState('');
  const defaultOptions = [];
  const handleOnBlur = () => console.log('Access onBlur function');
  return (
    <div>
      <DSFormItemLayout
        extraInputProps={{
          tabIndex: 14,
          onSearch: v => setSearch(v),
          options: search.includes('11') ? [] : defaultOptions,
        }}
        feedbackMessage="Some feedback from de user..."
        hasError={search.includes('11')}
        inputComponent={DSZipCodeSearch}
        labelText="Input search"
        onBlur={handleOnBlur}
        validationMessage={search.includes('11') ? 'No matches found' : null}
        value={value}
      />
    </div>
  );
};
export default memo(Component)
