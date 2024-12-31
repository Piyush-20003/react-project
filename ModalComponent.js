import React, { useState } from 'react';
import './ModalComponent.js';

function ModalComponent() {
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(!show);

  return (
    <div>
      <button className="custom-button" onClick={toggleModal}>Show Modal</button>
      {show && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Welcome to React</h2>
            <p>This is a modal component demonstration.</p>
            <button className="custom-button" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;
