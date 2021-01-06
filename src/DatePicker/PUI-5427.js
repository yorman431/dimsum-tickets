import React, {useState, memo} from 'react';
import moment from 'moment';
import DSDatePicker from '@elliemae/ds-date-picker';

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
  return (
    <div style={{width: '200px'}}>
      <button onClick={toggleValue}>{toggle.label}</button>
      { toggle.show ?
        <DSDatePicker
          className="example-class-name"
          containerProps={{ id: 'my-custom-id' }}
          disabled={false}
          enableOutsideDays
          firstDayOfWeek={0}
          hasError={false}
          hideKeyboardShortcutsPanel
          isDayBlocked={(day) => new Date(day) < new Date(2020, 7, 5)}
          isDayHighlighted={() => false}
          isOutsideRange={false}
          keepOpenOnDateSelect={false}
          onBlur={(val) => {
            //onBlur({ input: _i, isValid: _isValid });
            console.log('OnBlur: ', val);
          }}
          onChange={(selectedDate) => {
            const { _i, _isValid } = selectedDate;
            //onChange({ input: _i, isValid: _isValid });
            setDate(selectedDate);
            console.log(selectedDate);
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
          tabIndex={0}
          pickerProps={{
            tabindex: 1,
          }}
          calendarProps={{
            tabindex: 2,
          }}
        />
        : null
      }
    </div>
  )
}
export default  memo(Component);
