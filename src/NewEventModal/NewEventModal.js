import React, {useState} from "../../_snowpack/pkg/react.js";
export const NewEventModal = ({onSave, onClose}) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "newEventModal"
  }, /* @__PURE__ */ React.createElement("h2", null, "New Event"), /* @__PURE__ */ React.createElement("input", {
    className: error ? "error" : "",
    value: title,
    onChange: (e) => setTitle(e.target.value),
    id: "eventTitleInput",
    placeholder: "Event Title"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      if (title) {
        setError(false);
        onSave(title);
      } else {
        setError(true);
      }
    },
    id: "saveButton"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    onClick: onClose,
    id: "cancelButton"
  }, "Cancel")), /* @__PURE__ */ React.createElement("div", {
    id: "modalBackDrop"
  }));
};
