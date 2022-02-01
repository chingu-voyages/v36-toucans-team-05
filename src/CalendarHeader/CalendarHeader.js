import React from "../../snowpack/pkg/react.js";
import {ButtonList} from "../ButtonList/index.js";
export const CalendarHeader = ({
  onNext,
  onBack,
  dateDisplay,
  setDateFormat
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dateFormatDisplay"
  }, /* @__PURE__ */ React.createElement(ButtonList, {
    setDateFormat
  })), /* @__PURE__ */ React.createElement("div", {
    id: "subheader"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "monthDisplay"
  }, dateDisplay), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: onBack,
    id: "backButton"
  }, "Back"), /* @__PURE__ */ React.createElement("button", {
    onClick: onNext,
    id: "nextButton"
  }, "Next"))));
};
