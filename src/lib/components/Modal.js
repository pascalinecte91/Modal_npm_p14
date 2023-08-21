import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./modal.css";

// Définition du composant Modal avec les propriétés passées en paramètres
const Modal = ({
  isOpen,                 // Indique si la modal est ouverte ou fermée
  onClose,                // Fonction de rappel pour fermer la modal
  modalStyle,             // Style personnalisé pour la modal (optionnel)
  modalClassName,         // Classe CSS personnalisée pour la modal (optionnel)
  modalTitle,             // Titre de la modal (optionnel)
  showButtons = false,    // Indique si les boutons doivent être affichés (par défaut à false)
  firstName,              // Prénom (optionnel)
  lastName,               // Nom de famille (optionnel)
  onSave,                 // Fonction de rappel pour le bouton Enregistrer (optionnel)
  onCancel,               // Fonction de rappel pour le bouton Annuler (optionnel)
  actionLabel             // Libellé de l'action (optionnel)
}) => {
  const modalRef = useRef(null);     // Référence à l'élément DOM de la modal
  const triggerRef = useRef(null);   // Référence à l'élément DOM qui a déclenché l'ouverture de la modal

  useEffect(() => {
    // Gestion du focus lorsque la modal s'ouvre ou se ferme
    if (isOpen) {
      triggerRef.current = document.activeElement;   // Stocke l'élément qui avait le focus
      modalRef.current.focus();                      // Donne le focus à l'élément de la modal
    } else if (triggerRef.current) {
      triggerRef.current.focus();                    // Restaure le focus à l'élément précédent
      triggerRef.current = null;
    }
  }, [isOpen]);

  // Gestion du clic sur le fond de la modal ou le bouton de fermeture
  const handleBackdropClick = (event) => {
    if (
      event.target === event.currentTarget ||     // Clic sur le fond de la modal
      event.target.className === "close-button"   // Clic sur le bouton de fermeture
    ) {
      onClose();  // Appelle la fonction de fermeture
    }
  };

  // Rendu de la modal (si elle est ouverte)
  return isOpen ? (
    <div
      className={`modal-backdrop ${isOpen ? "open" : ""}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`modal ${isOpen ? "open" : ""} ${modalClassName}`}
        style={modalStyle}
        aria-modal="true"
        tabIndex="-1"
        ref={modalRef}
      >
        <div className="modal-content">
          {/* Affichage du titre de la modal s'il est fourni */}
          {modalTitle && <h2 className="modal-title">{modalTitle}</h2>}
          {/* Affichage du bouton de fermeture */}
          <button className="close-button" onClick={onClose}>
            <span>X</span>
          </button>{" "}
          {/* Affichage des boutons si showButtons est true */}
          {showButtons && (
            <>
              {/* Affichage du message avec le prénom et le nom */}
              {actionLabel && (
                <p className="modal-identity">
                  Would you like to register {actionLabel}{" "}
                  <strong>
                    {" "}{firstName} {lastName}{" "}
                  </strong>{" "}
                </p>
              )}
              {/* Affichage des boutons Enregistrer et Annuler */}
              <div className="modal-buttons">
                <button className="save-button" onClick={onSave}>
                  <i className="fa fa-save"></i> Register
                </button>
                <button className="cancel-button" onClick={onCancel}>
                  <i className="fas fa-trash"></i> Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : null; // Rendu nul si la modal est fermée
};

// Définition des types attendus pour les propriétés du composant
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
  modalClassName: PropTypes.string,
  modalTitle: PropTypes.string,
  showButtons: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  actionLabel: PropTypes.bool,
};

export default Modal; 
