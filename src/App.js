import React, { useState } from 'react';
import Modal from './lib/components/Modal';

import './lib/components/modal.css';


const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app">
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h2>hello , I am a reusable modal, open me with the "open modal" button and close me by clicking on the cross.</h2>
      </Modal>
    </div>
  );
};

export default App;
