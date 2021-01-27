import React, {useState, memo} from 'react';
import moment from 'moment';
import DSDatePicker from '@elliemae/ds-date-picker';
import DSFormItemLayout from '@elliemae/ds-basic/form/FormItem';

const Component = () => {
  const [date, setDate] = useState();
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });

  const toggleValue = (e) => {
    e.preventDefault();
    const show = !toggle.show;
    const label = toggle.show ? 'SHOW' : 'HIDE';
    setToggle({
      label: label,
      show: show
    });
  }

  const setNullDate = () => {
    setDate(null);
  };
  return (
    <div style={{width: '200px'}}>
      <button onClick={setNullDate}>Set Null Value</button>

      { toggle.show ?

        <DSFormItemLayout
          className="example-class-name"
          containerProps={{ id: 'my-custom-id' }}
          inputComponent={DSDatePicker}
          extraInputProps={{
            datePickerProps : {
              hideKeyboardShortcutsPanel: true,
            },
            pickerProps: {
              tabIndex: 1
            },
            calendarProps: {
              tabIndex: 2
            }
          }}
          disabled={false}
          onBlur={(val) => {
            //onBlur({ input: _i, isValid: _isValid });
            setDate(val);
            console.log('OnBlur: ', val);
          }}
          onChange={(selectedDate) => {
            // const { _i, _isValid } = selectedDate;
            //onChange({ input: _i, isValid: _isValid });
            const newDate = selectedDate.format('YYYY-MM-DD');
            setDate(selectedDate);
            console.log(newDate);
          }}
          onClose={() => {}}
          onFocus={() => {}}
          placeholder="Select Date"
          readOnly={false}
          required={false}
          screenReaderInputMessage="Select date"
          transitionDuration={0}
          value={date}
          verticalSpacing={0}
        />
        : null
      }
    </div>
  )
}
export default  memo(Component);
