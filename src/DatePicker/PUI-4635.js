import React, {useState, useEffect, memo} from 'react';
import moment from 'moment';
import DSDatePicker from '@elliemae/ds-date-picker';
const Component = () => {
  const fieldValue = '2020-08-21T19:38:28Z'
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });
  const [loan, setLoan] = useState({
    value: ''
  });

  const changeEvent = (event) => {
    const newValue = event ? moment(event).format('MM/DD/YYYY') : null;
    setLoan({
      value: newValue,
    });
  };
  const changeListener = (selectedDate) => {
    console.log('Moment callback: ',selectedDate);
    changeEvent(selectedDate);
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
        <DSDatePicker
          className='example-class-name'
          containerProps={{ id: 'my-custom-id' }}
          disabled={false}
          enableOutsideDays={false}
          firstDayOfWeek={0}
          hasError={false}
          hideKeyboardShortcutsPanel
          isDayBlocked={() => false}
          isDayHighlighted={() => false}
          isOutsideRange={false}
          keepOpenOnDateSelect
          onBlur={selectedDate => changeListener(selectedDate)}
          onChange={changeListener}
          onClose={(selectedDate) => changeListener(selectedDate)}
          onFocus={() => console.log('focused')}
          placeholder='Select Date'
          readOnly={false}
          required={false}
          screenReaderInputMessage='Select date'
          transitionDuration={0}
          value={loan.value}
          verticalSpacing={0}
        />
        : null
      }
    </div>
  )
}
export default memo(Component);
