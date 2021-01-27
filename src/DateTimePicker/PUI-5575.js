import React, {useState, memo} from 'react';
import DSFormItemLayout from '@elliemae/ds-basic/form/FormItem';
import moment from 'moment';
import DSDateTimePicker from '@elliemae/ds-date-time-picker';

const Component = () => {
  const [value, setValue] = useState();
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
});

  const changeListener = (event) => {
    const date = event?._isValid ? event.clone() : null;
    const newValue = date ? date.format('YYYY-MM-DD') : null;
    if (date !== null) {
      setValue(newValue);
    }
  }

  function toggleValue(e) {
    e.preventDefault();
    const show = !toggle.show;
    const label = toggle.show ? 'SHOW' : 'HIDE';
    setToggle({
      label: label,
      show: show
    });
  }

  return (
    <div style={{width: '200px'}}>
      <button onClick={toggleValue}>{toggle.label}</button>
      { toggle.show ?
        <DSFormItemLayout
          extraInputProps={{
            datePickerProps: {
              containerProps: { id: 'my-custom-id' },
              hideKeyboardShortcutsPanel: true,
              transitionDuration: 0,
              verticalSpacing: 0,
              screenReaderInputMessage: 'Select date',
              onDateChange: changeListener,
            },
            timePickerProps: {
              containerProps: { id: 'my-custom-id' },
              disabled: false,
              onChange: changeListener,
            },
            date: value,
          }}
          keepOpenOnDateSelect={false}
          placeholder={'MM/DD/YYYY'}
          readOnly={false}
          inputComponent={DSDateTimePicker}
          labelText="Input search"
          onBlur={(event) => {
            console.log('Event Log: ', event);
          }}
          onChange={(item) => {
            console.log(item);
          }}
          value={value}
        />
        : null
      }
    </div>
  );
}

export default  memo(Component);
