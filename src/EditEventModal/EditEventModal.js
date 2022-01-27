import React, {useState} from "../../snowpack/pkg/react.js";
export const EditEventModal = ({onSave, onDelete, eventText, onClose}) => {
  const [updateText, setText] = useState(eventText);
  const [isEditable, setIsEditable] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "deleteEventModal"
  }, /* @__PURE__ */ React.createElement("h2", null, "Event"), !isEditable && /* @__PURE__ */ React.createElement("p", {
    id: "eventText"
  }, updateText), isEditable && /* @__PURE__ */ React.createElement("input", {
    className: "",
    value: updateText,
    onChange: (e) => setText(e.target.value),
    id: "eventTitleInput"
  }), !isEditable && /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsEditable(!isEditable),
    id: "editButton"
  }, "Edit"), isEditable && /* @__PURE__ */ React.createElement("button", {
    onClick: () => onSave(updateText),
    id: "saveButton"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    onClick: onDelete,
    id: "deleteButton"
  }, "Delete"), /* @__PURE__ */ React.createElement("button", {
    onClick: onClose,
    id: "closeButton"
  }, "Close")), /* @__PURE__ */ React.createElement("div", {
    id: "modalBackDrop"
  }));
};
