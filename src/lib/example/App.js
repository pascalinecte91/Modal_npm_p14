import React, { useState } from "react";
import Modal from "../components/Modal.js";
// import Form from "./Form"; // décommentez cette ligne pour importer votre composant Form

import "../components/modal.css";

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  //  const [formData, setFormData] = useState({}); // décommentez cette ligne pour utiliser les données du formulaire

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

    // const handleFormData = (data) => { // décommentez cette fonction pour gérer les mises à jour des données du formulaire
    //   setFormData(data);
    // };

  // const handleSave = () => { // décommentez cette fonction pour gérer l'action du bouton "Enregistrer"
  //   // code pour enregistrer les données du formulaire
  //   console.log("Données du formulaire enregistrées :", formData);
  //   handleCloseModal();
  // };

  // const handleCancel = () => { // décommentez cette fonction pour gérer l'action du bouton "Non merci"
  //   // code pour annuler les modifications du formulaire
  //   console.log("Modifications du formulaire annulées");
  //   handleCloseModal();
  // };

  return (
    <div className="app">
      {/* <Form handleFormData={handleFormData} />  */}
      <button className="open-modal-button" onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        modalStyle={{ backgroundColor: "white" }}
        modalClassName="my-custom-modal-class"
        modalTitle="My Custom Modal Title"
        // firstName={formData.firstName} // décommentez cette ligne pour passer le prénom en tant que prop
        // lastName={formData.lastName} // décommentez cette ligne pour passer le nom en tant que prop
        // onSave={handleSave} // décommentez cette ligne pour passer la fonction de rappel pour le bouton "Enregistrer"
        // onCancel={handleCancel} // décommentez cette ligne pour passer la fonction de rappel pour le bouton "Non merci"
      >
        <h2>hello , I am a reusable modal, open me with the `open modal` button and close me by clicking on the cross.</h2>
      </Modal>
    </div>
  );
};

export default Example;
