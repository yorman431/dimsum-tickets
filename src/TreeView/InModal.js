import React, { useState } from 'react';
import ToggleExpand from './ToggleExpand';
import DSModal, { MODAL_TYPE_V2 } from '@elliemae/ds-modal';
import DSButton from '@elliemae/ds-basic/Button';

export default () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <div style={{ padding: '2rem 0' }}>
        <DSButton labelText="Toggle Modal" onClick={toggle} />
      </div>
      <DSModal
        isOpen={isOpen}
        modalTitle="Demo Modal with TreeView"
        modalType={MODAL_TYPE_V2.DECISION}
        onClose={toggle}
        onConfirm={toggle}
        onReject={toggle}
        shouldCloseOnOverlayClick
        size="large"
        version={2}
      >
        <div style={{ height: '400px' }}>
          <ToggleExpand />
        </div>
      </DSModal>
    </>
  );
};
