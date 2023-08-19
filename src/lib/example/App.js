import React, { useState } from "react";
import "../components/modal.css"; // Assurez-vous que le chemin vers le fichier CSS est correct
import Modal from "../components/Modal.js";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    handleCloseModal();
  };

  const handleCancel = () => {
    console.log("Modifications du formulaire annulées");
    handleCloseModal();
  };

  return (
    <div className="app">
      <button className="open-modal-button" onClick={handleOpenModal}>
        Open Modal
      </button>
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          modalStyle={{ backgroundColor: "white" }}
          modalClassName="my-custom-modal-class"
          modalTitle="I'm a modal to customize !"
          onSave={handleSave}
          onCancel={handleCancel}
          showButtons={false} // Contrôle l'affichage des boutons
        >
          {/* Vous pouvez également ajouter d'autres contenus dans la modal ici */}
        </Modal>
      )}
    </div>
  );
};

export default App;
