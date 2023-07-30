

# Modal

Le plugin Modal vous permet d’afficher une modal avec un message de confirmation après la création d’un employé dans votre projet React.

## Installation

Pour installer le plugin Modal, vous pouvez utiliser npm ou yarn pour ajouter le package à votre projet:

```bash
npm install --save banby-modal-customize-react

```
ou
```bash
yarn add banby-modal-customize-react

```

## Utilisation

Pour utiliser le plugin Modal dans votre projet, vous devez importer le composant Modal et le rendre dans votre composant en passant les props appropriées.

Voici un exemple de code qui montre comment utiliser le composant Modal dans un projet React:

```javascript
   import React, { useState } from "react";
   import Modal from "banby-modal-customize-react";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [employeeCreated, setEmployeeCreated] = useState(false);
  const [firstName, setFirstName] = useState("");

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
          firstName={firstName}
        >
        </Modal>
      )}
    </div>
  );
};

export default App;
```

## Props

Le composant Modal accepte les props suivantes :

- `isOpen` (booléen) : Indique si la modal doit être ouverte ou fermée.
- `onClose` (fonction) : Fonction de rappel appelée lorsque l'utilisateur ferme la modal.
- `modalStyle` (objet) : Un objet contenant des styles en ligne pour la modal.
- `modalClassName` (chaîne) : Une chaîne contenant des noms de classe CSS pour la modal.
- `modalTitle` (chaîne) : Une chaîne contenant le titre de la modal.
- `firstName` (chaîne) : Une chaîne contenant le prénom à afficher dans la modal.
- `lastName` (chaîne) : Une chaîne contenant le nom à afficher dans la modal.
- `onSave` (fonction) : Fonction de rappel appelée lorsque l'utilisateur clique sur le bouton "Enregistrer".
- `onCancel` (fonction) : Fonction de rappel appelée lorsque l'utilisateur clique sur le bouton "Non merci".
- `employeeCreated `(booléen) : qui indique si un employé a été créé ou non.

---
## Licence

Ce package est distribué sous la [LICENCE](https://opensource.org/licenses/MIT) MIT. Veuillez consulter le fichier LICENSE pour plus d'informations.

## Support
Si vous rencontrez des problèmes avec ce plugin ou si vous avez des questions ou des suggestions, veuillez nous contacter à l’adresse support@modal-plugin.com.

<div style="text-align: center; width: 50%">
  <img src="public/modal.png" alt="logo" style="border-radius: 10px;">