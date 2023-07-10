import { useEffect, useRef } from 'react';

const Modal = ({
  isOpen,
  onClose,
  children,
  modalStyle,
  modalClassName,
  modalTitle,
  firstName,
  lastName,
  onSave,
  onCancel
}) => {
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      modalRef.current.focus();
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [isOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div className="modal-content">
      {modalTitle && <h2 className="modal-title">{modalTitle}</h2>}
      <button className="close-button" onClick={onClose}>
        <span>X</span>
      </button>
      <p className="info">Save information ?</p>
      <p>LastName: {lastName}</p>
      <p>FirstName: {firstName}</p>
      <div className="modal-buttons">
        <button className="save-button" onClick={onSave}>
          <i className="fa fa-save"></i> Register
        </button>
        <button className="cancel-button" onClick={onCancel}>No Thanks</button>
      </div>
    </div>
  );
  
  return isOpen ? (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div
        className={`modal open ${modalClassName}`}
        style={modalStyle}
        aria-modal="true"
        tabIndex="-1"
        ref={modalRef}
      >
        {modalContent}
      </div>
    </div>
  ) : null;
};
export default Modal;
