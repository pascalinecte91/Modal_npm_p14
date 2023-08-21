"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./modal.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Définition du composant Modal avec les propriétés passées en paramètres
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    modalStyle = _ref.modalStyle,
    modalClassName = _ref.modalClassName,
    modalTitle = _ref.modalTitle,
    _ref$showButtons = _ref.showButtons,
    showButtons = _ref$showButtons === void 0 ? false : _ref$showButtons,
    firstName = _ref.firstName,
    lastName = _ref.lastName,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel,
    actionLabel = _ref.actionLabel;
  var modalRef = (0, _react.useRef)(null); // Référence à l'élément DOM de la modal
  var triggerRef = (0, _react.useRef)(null); // Référence à l'élément DOM qui a déclenché l'ouverture de la modal

  (0, _react.useEffect)(function () {
    // Gestion du focus lorsque la modal s'ouvre ou se ferme
    if (isOpen) {
      triggerRef.current = document.activeElement; // Stocke l'élément qui avait le focus
      modalRef.current.focus(); // Donne le focus à l'élément de la modal
    } else if (triggerRef.current) {
      triggerRef.current.focus(); // Restaure le focus à l'élément précédent
      triggerRef.current = null;
    }
  }, [isOpen]);

  // Gestion du clic sur le fond de la modal ou le bouton de fermeture
  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target === event.currentTarget ||
    // Clic sur le fond de la modal
    event.target.className === "close-button" // Clic sur le bouton de fermeture
    ) {
      onClose(); // Appelle la fonction de fermeture
    }
  };

  // Rendu de la modal (si elle est ouverte)
  return isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-backdrop ".concat(isOpen ? "open" : ""),
    onClick: handleBackdropClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal ".concat(isOpen ? "open" : "", " ").concat(modalClassName),
      style: modalStyle,
      "aria-modal": "true",
      tabIndex: "-1",
      ref: modalRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-content",
        children: [modalTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "modal-title",
          children: modalTitle
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "close-button",
          onClick: onClose,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "X"
          })
        }), " ", showButtons && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [actionLabel && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            className: "modal-identity",
            children: ["Would you like to register ", actionLabel, " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("strong", {
              children: [" ", firstName, " ", lastName, " "]
            }), " "]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "modal-buttons",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              className: "save-button",
              onClick: onSave,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                className: "fa fa-save"
              }), " Register"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              className: "cancel-button",
              onClick: onCancel,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                className: "fas fa-trash"
              }), " Cancel"]
            })]
          })]
        })]
      })
    })
  }) : null; // Rendu nul si la modal est fermée
};

// Définition des types attendus pour les propriétés du composant
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  modalStyle: _propTypes.default.object,
  modalClassName: _propTypes.default.string,
  modalTitle: _propTypes.default.string,
  showButtons: _propTypes.default.bool,
  firstName: _propTypes.default.string,
  lastName: _propTypes.default.string,
  onSave: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  actionLabel: _propTypes.default.bool
};
var _default = Modal;
exports.default = _default;