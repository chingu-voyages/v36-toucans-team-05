import React from "../../snowpack/pkg/react.js";
export const DayView = ({events, dayDisplay, setClicked}) => {
  let arr = [];
  let currentDayEvent = [];
  const activeIndex = (idx, ce) => {
    return ce ? new Date(ce[0]?.createdAt).getHours() === idx : "";
  };
  for (let i = 0; i < 24; i++) {
    arr.push(i + ":00");
  }
  if (dayDisplay) {
    const dayString = (dateObject) => `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
    const currentDay = dayString(dayDisplay);
    currentDayEvent = events.filter((event) => event.date === currentDay);
  }
  return /* @__PURE__ */ React.createElement("div", {
    id: "dayView"
  }, arr.map((item, idx) => /* @__PURE__ */ React.createElement("div", {
    className: "dayContainer",
    key: idx,
    onClick: () => activeIndex(idx, currentDayEvent) && setClicked(currentDayEvent[0]?.date)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "dayText"
  }, item), /* @__PURE__ */ React.createElement("span", {
    className: [`dayMsg ${currentDayEvent.length !== 0 && activeIndex(idx, currentDayEvent) ? "active" : ""}`]
  }, /* @__PURE__ */ React.createElement("span", null, activeIndex(idx, currentDayEvent) && currentDayEvent[0]?.title)))));
};
