import React, { useState } from 'react';
import { DSComboBox2 } from '@elliemae/ds-basic/form/ComboBox';
import { Grid } from '@elliemae/ds-basic/Grid';
import DSFormItemLayout from '@elliemae/ds-basic/form/FormItem';
// DimSum Internal Use
import { options } from '../ComboBox/options';

export default () => {
  const [value, setValue] = useState(null);
  const onChange = (val) => setValue(val);

  return (
    <Grid p="3rem">
      <div style={{ height: '85vh' }}>Pusher</div>
      <DSFormItemLayout
        className="task-form-textbox"
        clearable
        containerProps={{ 'data-testid': 'newtask-combo-role' }}
        // disabled={assignmentCheck !== 'Role'}
        extraInputProps={{
          // maxOptions fixes: ENCW-49747
          options,
          maxOptions: 10,
          // labelProperty: 'name',
          // valueProperty: 'id',
          // onChange: onChange,
          // placeholder: 'Select a Role',
          // readOnly: false,
          // value: value,
        }}
        inputComponent={DSComboBox2}
        onChange={onChange}
        placeholder="Select a Role"
        readOnly={false}
        value={value}
      />
    </Grid>
  );
};
