import React from 'react';
import DSTextBox from '@elliemae/ds-basic/form/TextBox';
import DSSearchBox from '@elliemae/ds-basic/form/SearchBox';

export default () => {
  return (
    <div>
      <DSTextBox clearable value="Textbox with clearable" />
      <DSSearchBox placeholder="Search without clearable" />
      <DSSearchBox
        placeholder="Search with clearable (doesn't work)"
        clearable
      />
    </div>
  );
};
