# Modal

The Modal component is a reusable React component that displays a modal window with customisable content.

## Installation

To install the npm package, use the following command:

```bash
npm i banby-modal-customize-react
```

## Use

To use the Modal component in your project, import it from the npm package and use it in your code like any other React component:

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
      {/* Customisable modal content*/}
    </Modal>
    // ...
  );
};
```
## Props

The Modal component accepts the following props:

- `isOpen` (boolean): Indicates whether the modal should be opened or closed.
- onClose` (function): Callback function called when the user closes the modal.
- children` (node): The customisable content of the modal.
- `modalStyle` (object): An object containing inline styles for the modal.
- `modalClassName` (string) : A string containing CSS class names for the modal.
- `modalTitle` (string) : A string containing the title of the modal.
- `firstName` (string) : A string containing the first name to be displayed in the modal.
- `lastName` (string) : A string containing the last name to be displayed in the modal.
- onSave` (function): A callback function called when the user clicks the `save` button.
- onCancel` (function): Callback function called when the user clicks the "No thanks" button.

## Example

Here's an example of using the Modal component to display data from a form and allow the user to save or cancel changes:

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
    // code for saving form data
    console.log("Données du formulaire enregistrées :", formData);
    handleCloseModal();
  };

  const handleCancel = () => {
    // code to cancel changes to the form
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

      </Modal>
    </div>
  );
};

export default App;
```
In this example, we have a `Form` component which manages the form data and a `handleFormData` function which is passed as a prop to the `Form` component to receive updates to the form data. When the user enters data into the form, the `Form` component calls the `handleFormData` function to update the `formData` state in the `App` component.

We also have two functions, `handleSave` and `handleCancel`, which are passed as props to the `Save` and `No thanks` buttons in our Modal component. These functions are called when the user clicks on the buttons to save or cancel changes to the form.

Finally, we pass the form data as props to our Modal component to display the information in the modal.

## Licence

This package is published under the ..... licence
---
## Component Modal implementation :

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
