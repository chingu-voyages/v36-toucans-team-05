import React from "../_snowpack/pkg/react.js";
export const DeleteEventModal = ({onDelete, eventText, onClose}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "deleteEventModal"
  }, /* @__PURE__ */ React.createElement("h2", null, "Event"), /* @__PURE__ */ React.createElement("p", {
    id: "eventText"
  }, eventText), /* @__PURE__ */ React.createElement("button", {
    onClick: onDelete,
    id: "deleteButton"
  }, "Delete"), /* @__PURE__ */ React.createElement("button", {
    onClick: onClose,
    id: "closeButton"
  }, "Close")), /* @__PURE__ */ React.createElement("div", {
    id: "modalBackDrop"
  }));
};
