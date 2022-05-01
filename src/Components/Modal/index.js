import React from "react";
import ReactDOM from "react-dom";
const Modal = ({ containerElement, children }) => {
  const DOMElement = document.body;
  return ReactDOM.createPortal(<div>{children}</div>, DOMElement);
};

export default Modal;
