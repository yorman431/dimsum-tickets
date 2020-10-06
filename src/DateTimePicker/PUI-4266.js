import React, {useState, memo} from 'react';
import moment from 'moment';
import DSDateTimePicker from '@elliemae/ds-date-time-picker';


const Component = () => {
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });
  const [loan, setLoan] = useState({
    value: null
  });

  const changeEvent = (event, key) => {
    const newValue = event ? moment((event).format()) : event;
    console.log(newValue);
      setLoan({
        value: newValue,
      });
  };

  const changeListener = (selectedDate) => {
    changeEvent(selectedDate);
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
