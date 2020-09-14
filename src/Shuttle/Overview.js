import React, { useState } from 'react';
import DSShuttle from '@elliemae/ds-shuttle';
import shuttleItems from './items';
import styled from 'styled-components';

const Div = styled.div`
  max-height: 500px;
`;

export default function Virtualization10kRows() {
  const [items] = useState(shuttleItems);

  console.log('items', items);
  return (
    <Div>
      <DSShuttle
        items={items}
        onTargetSortEnd={(...args) => console.log(...args)}
      />
    </Div>
  );
}
