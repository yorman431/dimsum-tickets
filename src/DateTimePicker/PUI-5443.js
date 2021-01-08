import React, {useState, memo} from 'react';
import moment from 'moment';
import DSDateTimePicker from '@elliemae/ds-date-time-picker';


const Component = () => {
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });
  const [value, setValue] = useState();

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
    setValue(null);
  };
  return (
    <div style={{width: '200px'}}>
      <button onClick={setNullDate}>Set Null Value</button>
      { toggle.show ?
        <DSDateTimePicker
          date={value}
          datePickerProps={{
            containerProps: { id: 'my-custom-id' },
            disabled: false,
            enableOutsideDays: false,
            firstDayOfWeek: 0,
            hasError: false,
            isDayBlocked: (day) => new Date(day) < new Date(),
            isDayHighlighted: () => false,
            readOnly: false,
            required: false,
            screenReaderInputMessage: 'Select date',
            verticalSpacing: 0,
            onDateChange: (val) => {
              console.log('OnDateChange: ', val);
            },
          }}
          timePickerProps={{
            containerProps: { id: 'my-custom-id' },
            disabled: false,
            onChange: (val) => {
              console.log('onTimeChange: ', val);
            },
            disabledTimes: {
              from: '00:00:00 AM',
              to: '01:30:00 PM',
            },
          }}
        />
        : null
      }
    </div>

  )
}
export default memo(Component);
