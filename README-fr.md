

# Modal

Le composant Modal est un composant React réutilisable qui permet d'afficher une fenêtre modale avec un contenu personnalisable.

## Installation

Pour installer le package npm, utilisez la commande suivante :

```
npm install your-npm-package-name
```

## Utilisation

Pour utiliser le composant Modal dans votre projet, importez-le à partir du package npm et utilisez-le dans votre code comme tout autre composant React :

```javascript
import Modal from 'your-npm-package-name';

const App = () => {
  // ...

  return (
    // ...
    <Modal
      isOpen={modalOpen}
      onClose={handleCloseModal}
      modalStyle={{ backgroundColor: "white" }}
      modalClassName="my-custom-modal-class"
      modalTitle="My Custom Modal Title"
    >
      {/* Contenu personnalisable de la modal */}
    </Modal>
    // ...
  );
};
```

## Props

Le composant Modal accepte les props suivantes :

- `isOpen` (booléen) : Indique si la modal doit être ouverte ou fermée.
- `onClose` (fonction) : Fonction de rappel appelée lorsque l'utilisateur ferme la modal.
- `children` (nœud) : Le contenu personnalisable de la modal.
- `modalStyle` (objet) : Un objet contenant des styles en ligne pour la modal.
- `modalClassName` (chaîne) : Une chaîne contenant des noms de classe CSS pour la modal.
- `modalTitle` (chaîne) : Une chaîne contenant le titre de la modal.
- `firstName` (chaîne) : Une chaîne contenant le prénom à afficher dans la modal.
- `lastName` (chaîne) : Une chaîne contenant le nom à afficher dans la modal.
- `onSave` (fonction) : Fonction de rappel appelée lorsque l'utilisateur clique sur le bouton "Enregistrer".
- `onCancel` (fonction) : Fonction de rappel appelée lorsque l'utilisateur clique sur le bouton "Non merci".

## Exemple

Voici un exemple d'utilisation du composant Modal pour afficher les données d'un formulaire et permettre à l'utilisateur d'enregistrer ou d'annuler les modifications :

```javascript
import React, { useState } from "react";
import Modal from 'your-npm-package-name';
import Form from "./Form";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormData = (data) => {
    setFormData(data);
  };

  const handleSave = () => {
    // code pour enregistrer les données du formulaire
    console.log("Données du formulaire enregistrées :", formData);
    handleCloseModal();
  };

  const handleCancel = () => {
    // code pour annuler les modifications du formulaire
    console.log("Modifications du formulaire annulées");
    handleCloseModal();
  };

  return (
    <div className="app">
      <Form handleFormData={handleFormData} />
      <button className="open-modal-button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        modalStyle={{ backgroundColor: "white" }}
        modalClassName="my-custom-modal-class"
        modalTitle="My Custom Modal Title"
        firstName={formData.firstName}
        lastName={formData.lastName}
        onSave={handleSave}
        onCancel={handleCancel}
      >
        {/* Contenu personnalisable de la modal */}
      </Modal>
    </div>
  );
};

export default App;
```

Dans cet exemple, nous avons un composant `Form` qui gère les données du formulaire et une fonction `handleFormData` qui est passée en tant que prop au composant `Form` pour recevoir les mises à jour des données du formulaire. Lorsque l'utilisateur saisit des données dans le formulaire, le composant `Form` appelle la fonction `handleFormData` pour mettre à jour l'état `formData` dans le composant `App`.

Nous avons également deux fonctions, `handleSave` et `handleCancel`, qui sont passées en tant que props aux boutons "Enregistrer" et "Non merci" de notre composant Modal. Ces fonctions sont appelées lorsque l'utilisateur clique sur les boutons pour enregistrer ou annuler les modifications du formulaire.

Enfin, nous passons les données du formulaire en tant que props à notre composant Modal pour afficher les informations dans la modal.

## Licence

Ce package est publié sous la licence .....

---
## Implémentation du Component Modal :
```javascript
import React, { useRef, useEffect } from "react";

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
      {firstName && lastName && (
        <>
          <p>Enregistrez les informations ?</p>
          <p>Nom: {lastName}</p>
          <p>Prénom: {firstName}</p>
          <div className="modal-buttons">
            <button className="save-button" onClick={onSave}>Enregistrer</button>
            <button className="cancel-button" onClick={onCancel}>Non merci</button>
          </div>
        </>
      )}
      {children}
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

```
