"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    modalStyle = _ref.modalStyle,
    modalClassName = _ref.modalClassName,
    modalTitle = _ref.modalTitle,
    firstName = _ref.firstName,
    lastName = _ref.lastName,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel;
  var modalRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      modalRef.current.focus();
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [isOpen]);
  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  var modalContent = /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, modalTitle && /*#__PURE__*/React.createElement("h2", {
    className: "modal-title"
  }, modalTitle), /*#__PURE__*/React.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("span", null, "X")), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, "Save information ?"), /*#__PURE__*/React.createElement("p", null, "LastName: ", lastName), /*#__PURE__*/React.createElement("p", null, "FirstName: ", firstName), /*#__PURE__*/React.createElement("div", {
    className: "modal-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "save-button",
    onClick: onSave
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-save"
  }), " Register"), /*#__PURE__*/React.createElement("button", {
    className: "cancel-button",
    onClick: onCancel
  }, "No Thanks")));
  return isOpen ? /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: handleBackdropClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal open ".concat(modalClassName),
    style: modalStyle,
    "aria-modal": "true",
    tabIndex: "-1",
    ref: modalRef
  }, modalContent)) : null;
};
var _default = Modal;
exports.default = _default;