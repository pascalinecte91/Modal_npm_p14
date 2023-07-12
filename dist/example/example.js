"use strict";

var _interopRequireWildcard = require("C:/Users/Utilisateur/Documents/modal_npm_p14/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("C:/Users/Utilisateur/Documents/modal_npm_p14/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("C:/Users/Utilisateur/Documents/modal_npm_p14/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = _interopRequireWildcard(require("react"));
var _Modal = _interopRequireDefault(require("../lib/components/Modal"));
require("../lib/components/modal.css");
// import Form from './Form'; // décommentez cette ligne pour importer votre composant Form

var Example = function Example() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    modalOpen = _useState2[0],
    setModalOpen = _useState2[1];
  // const [formData, setFormData] = useState({}); // décommentez cette ligne pour utiliser les données du formulaire

  var handleOpenModal = function handleOpenModal() {
    setModalOpen(true);
  };
  var handleCloseModal = function handleCloseModal() {
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleOpenModal
  }, "Open Modal"), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    isOpen: modalOpen,
    onClose: handleCloseModal,
    modalStyle: {
      backgroundColor: 'red'
    },
    modalClassName: "my-custom-modal-class",
    modalTitle: "My Custom Modal Title"
    // firstName={formData.firstName} // décommentez cette ligne pour passer le prénom en tant que prop
    // lastName={formData.lastName} // décommentez cette ligne pour passer le nom en tant que prop
    // onSave={handleSave} // décommentez cette ligne pour passer la fonction de rappel pour le bouton "Enregistrer"
    // onCancel={handleCancel} // décommentez cette ligne pour passer la fonction de rappel pour le bouton "Non merci"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "hello , I am a reusable modal, open me with the \"open modal\" button and close me by clicking on the cross.")));
};
var _default = Example;
exports.default = _default;