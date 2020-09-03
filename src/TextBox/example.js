import React, {useState, memo} from 'react';
import DSTextBox from '@elliemae/ds-basic/form/TextBox';
import DSFormItemLayout from "@elliemae/ds-basic/form/FormItem"
import DSInputMask, { MASK_TYPES } from '@elliemae/ds-basic/form/InputMask'


const Component = () => {
  const [loan, setLoan] = useState({
    value: ''
  });
  const [toggle, setToggle] = useState({
    label: 'HIDE',
    show: true
  });
  const opts = {
    allowDecimal:true,
    allowNegative: true,
    decimalLimit: 2,
    includeThousandsSeparator: true,
    integerLimit: 9,
    prefix: '',
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
      {toggle.show ?
        <DSFormItemLayout
          clearable
          feedbackMessage='$xx,xxx,xxx.xx'
          floatingLabel
          inputComponent={DSInputMask}
          labelText='Number'
          mask={number => MASK_TYPES.NUMBER(opts)(number)}
          maxLenght={9}
          onChange={e => setLoan({ value: e.target.value })}
          placeholder='$ 00.000'
          value={loan.value}
        />
        :
        null
      }
    </div>
  )
}

export default memo(Component);
