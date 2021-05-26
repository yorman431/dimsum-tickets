/* eslint-disable max-lines */
import React from 'react';
import DSCardNavigation, {
  CardNavigationTypesValues,
  CardNavigationTypes,
} from '@elliemae/ds-card-navigation';
import './style.css';
import Delete from '@elliemae/ds-icons/Delete';

export default function Basic() {


  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {CardNavigationTypesValues.map((type, key) => (
        <DSCardNavigation
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          description="Card description"
          style={{ margin: '2rem' }}
          title={`Card Title ${type.toUpperCase()}`}
          type={type}
        />
      ))}
      <DSCardNavigation
        actions={[
          {
            onClick: console.log,
          },
        ]}
        description="Card description"
        style={{ margin: '2rem' }}
        title="Monthly Income and Combined Housing Expense"
        type={CardNavigationTypes.BORROWER}
      />
    </div>
  );
}
