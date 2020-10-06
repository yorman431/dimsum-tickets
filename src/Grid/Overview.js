import React from 'react';
import { Grid } from '@elliemae/ds-basic/Grid';

export default () => (
  <Grid rows={[1, 1]} gutter={2}>
    <Grid cols={{ large: [4, 8], medium: [4, 8] }} gutter={2}>
      Row 1
    </Grid>
    <Grid cols={{ large: [4, 4, 4], medium: [4, 4, 4] }} gutter={2}>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </Grid>
  </Grid>
);
