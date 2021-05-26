import React, {useState, memo} from 'react';
import DSFormItemLayout from '@elliemae/ds-basic/form/FormItem';
import DSZipCodeSearch from '@elliemae/ds-basic/ZipCodeSearch';

const Component = () => {
  const [value, setValue] = useState();
  const [search, setSearch] = useState([]);

  const options = [
    {value: '123456789', label: (`<p><b>City, Country, State</b></p>`)},
    {value: '234567890', label: (`<p><b>City2, Country2, State2</b></p>`)},
    {value: '345678901', label: (`<p><b>City3, Country3, State3</b></p>`)},
  ]


  return (
    <div>
      <DSFormItemLayout
        extraInputProps={{
          onSearch: (v) => setSearch(v),
          options: search.includes('12') ? options : [],
        }}
        feedbackMessage="Some feedback from de user..."
        hasError={!search.includes(value)}
        inputComponent={DSZipCodeSearch}
        labelText="Input search"
        onBlur={(item) => {
          setValue(item.target.value);
          console.log(item.target.value);
        }}
        onChange={(item) => {
          setValue(item.value);
          console.log('onChange');
        }}
        validationMessage={!search.includes(value) ? 'No matches found' : null}
        value={value}
      />
    </div>
  );
}

export default  memo(Component);
