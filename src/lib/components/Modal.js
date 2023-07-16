import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./modal.css";


const Modal = ({
  isOpen,
  onClose,
  modalStyle,
  modalClassName,
  modalTitle,
  firstName,
  lastName,
  onSave,
  onCancel,
  employeeCreated
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
    if (event.target === event.currentTarget || event.target.className === "close-button") {
      onClose();
    }
  };

  return isOpen ? (
    <div className={`modal-backdrop ${isOpen ? "open" : ""}`} onClick={handleBackdropClick}>
      <div
        className={`modal ${isOpen ? "open" : ""} ${modalClassName}`}
        style={modalStyle}
        aria-modal="true"
        tabIndex="-1"
        ref={modalRef}
      >
        <div className="modal-content">
          {modalTitle && <h2 className="modal-title">{modalTitle}</h2>}
          <button className="close-button" onClick={onClose}>
            <span>X</span></button>
          {employeeCreated && <p className="modal-identity">Votre employé: {firstName}, {lastName} a bien été créé</p>}
          <div className="modal-buttons">
            <button className="save-button" onClick={onSave}>
              <i className="fa fa-save"></i> Register
            </button>
            <button className="cancel-button" onClick={onCancel}><i className="fas fa-trash"></i> Cancel</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
  modalClassName: PropTypes.string,
  modalTitle: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  employeeCreated: PropTypes.bool.isRequired
};

export default Modal;