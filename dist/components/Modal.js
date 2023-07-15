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
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    modalStyle = _ref.modalStyle,
    modalClassName = _ref.modalClassName,
    modalTitle = _ref.modalTitle,
    firstName = _ref.firstName,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel,
    employeeCreated = _ref.employeeCreated;
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
    if (event.target === event.currentTarget || event.target.className === "close-button") {
      onClose();
    }
  };
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
        }), employeeCreated && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: ["Votre employ\xE9: ", firstName, " a bien \xE9t\xE9 cr\xE9\xE9"]
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
            children: "Cancel"
          })]
        })]
      })
    })
  }) : null;
};
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  modalStyle: _propTypes.default.object,
  modalClassName: _propTypes.default.string,
  modalTitle: _propTypes.default.string,
  firstName: _propTypes.default.string,
  lastName: _propTypes.default.string,
  onSave: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  employeeCreated: _propTypes.default.bool.isRequired
};
var _default = Modal;
exports.default = _default;