import React from 'react';


const Modal = ({ isOpen, onClose, children }) => {
  const modalContent = (
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>
        <span>X</span>
      </button>
      {children}
    </div>
  );

  return isOpen ? <div className="modal open">{modalContent}</div> : null;
};


export default Modal;
