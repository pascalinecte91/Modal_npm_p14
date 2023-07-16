import React, { useState } from "react";
import "../components/modal.css";
import Modal from "../components/Modal.js";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [employeeCreated, setEmployeeCreated] = useState(false);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    setEmployeeCreated(true);
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
          employeeCreated={employeeCreated}
         
        >
        </Modal>
      )}
    </div>
  );
};

export default App;
