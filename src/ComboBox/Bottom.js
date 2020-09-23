import React, { useState } from 'react';
import { DSComboBox2 } from '@elliemae/ds-basic/form/ComboBox';
import { Grid } from '@elliemae/ds-basic/Grid';
// DimSum Internal Use
import { options } from './options';

export default () => {
  const [value, setValue] = useState(null);
  const onChange = (val) => setValue(val);

  return (
    <Grid p="3rem">
      <div style={{ height: '85vh' }}>Pusher</div>
      <DSComboBox2
        // containerProps={{ id: 'my-custom-id' }}
        // disabled={knobDisabled}
        placeholder="Select"
        // menuIsOpen={knobMenuIsOpen}
        // onBlur={onBlurAction}
        onChange={onChange}
        // onFocus={onFocusAction}
        options={options}
        // readOnly={knobReadOnly}
        // searchable={knobSearchable}
        value={value}
        maxOptions={10}
        // keepTypedValue={false} // TEMPORARY PROP
      />
    </Grid>
  );
};
