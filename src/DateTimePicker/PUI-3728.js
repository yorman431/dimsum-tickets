import React, {useState, memo} from 'react';
import moment from 'moment';
import DSDateTimePicker from '@elliemae/ds-date-time-picker';


const Component = () => {
  const fieldValue = '2020-08-21T19:38:28Z'
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });
  const [loan, setLoan] = useState({
    value: moment.utc(fieldValue).local()
  });

  const changeEvent = (event, key) => {
    const newValue = event ? moment(event).utc().format() : event;
    if (key) {
      setLoan({
        key: key,
        value: newValue,
      });
    }
  };

  const changeListener = (selectedDate) => {
    console.log('selectDate: ',selectedDate);
    if (!selectedDate._i) {
      changeEvent(selectedDate);
    } else if (
      moment(selectedDate._i, 'YYYY-MM-DD', true).isValid() ||
      moment(selectedDate._i, 'MM/DD/YYYY', true).isValid()
    ) {
      changeEvent(selectedDate);
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
    if (show) {
      const date = moment.utc(fieldValue).local();
      console.log(date);
      setLoan({value: moment.utc(date._d).local()})
    }
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
