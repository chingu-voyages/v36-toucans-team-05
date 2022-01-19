import React from "../../_snowpack/pkg/react.js";
export const Day = ({day, onClick}) => {
  const className = `day ${day.value === "padding" ? "padding" : ""} ${day.isCurrentDay ? "currentDay" : ""}`;
  return /* @__PURE__ */ React.createElement("div", {
    onClick,
    className
  }, day.value === "padding" ? "" : day.value, day.event && /* @__PURE__ */ React.createElement("div", {
    className: "event"
  }, day.event.title));
};
