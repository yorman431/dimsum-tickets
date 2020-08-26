import React, {useState, useEffect, memo} from 'react';
import moment from 'moment';
import DSDateTimePicker from '@elliemae/ds-date-time-picker';
const Component = () => {
  const fieldValue = '2020-08-21T19:38:28Z'
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });
  const [loan, setLoan] = useState({
    value: null
  });

  useEffect(() => {
    setTimeout(() => setLoan({ value: moment(fieldValue)}), 3000)
  }, [])

  const changeEvent = (event) => {
    const newValue = event ? moment(event) : event;
    setLoan({
      value: newValue,
    });
  };
  const changeListener = (selectedDate) => {
    if (!selectedDate._i) {
      console.log('selectDate: ',selectedDate);
      changeEvent(selectedDate);
    } else if (
      moment(selectedDate._i, 'YYYY-MM-DD', true).isValid() ||
      moment(selectedDate._i, 'MM/DD/YYYY', true).isValid()
    ) {
      console.log('1.selectDate: ',selectedDate);
      changeEvent(selectedDate);
    }
  };
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
        <DSDateTimePicker
          width={200}
          date={loan.value}
          datePickerProps={{
            hideKeyboardShortcutsPanel: true,
            onDateChange: changeListener,
          }}
          placeholder="Select date and time"
          timePickerProps={{
            containerProps: { id: 'my-custom-id' },
            disabled: false,
            onChange: changeListener,
          }}
        />
        : null
      }
    </div>
  )
}
export default memo(Component);
