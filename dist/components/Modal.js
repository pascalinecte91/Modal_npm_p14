"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
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
  var modalContent = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "info",
      children: "Save information ?"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["LastName: ", lastName]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["FirstName: ", firstName]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal-buttons",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: "save-button",
        onClick: onSave,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "fa fa-save"
        }), " Register"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "cancel-button",
        onClick: onCancel,
        children: "No Thanks"
      })]
    })]
  });
  return isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-backdrop",
    onClick: handleBackdropClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal open ".concat(modalClassName),
      style: modalStyle,
      "aria-modal": "true",
      tabIndex: "-1",
      ref: modalRef,
      children: modalContent
    })
  }) : null;
};
var _default = Modal;
exports.default = _default;