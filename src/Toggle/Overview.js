import React, { Component } from 'react';
import DSToggle from '@elliemae/ds-basic/form/Toggle';

export default class Overview extends Component {
  state = {
    isChecked: true,
  };
  handleChange(e) {
    const { checked } = e.target;
    this.setState({ isChecked: checked });
  }
  render() {
    const { isChecked } = this.state;
    return (
      <div>
        <DSToggle
          checked={isChecked}
          containerProps={{ id: 'my-custom-id' }}
          onChange={this.handleChange}
          value="myVal"
        />
        <h3>{isChecked ? 'TRUE' : 'FALSE'}</h3>
      </div>
    );
  }
}
