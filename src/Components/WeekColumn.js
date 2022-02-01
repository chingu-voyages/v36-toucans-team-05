import React from "../../snowpack/pkg/react.js";
export const WeekColumn = ({events, weekDisplay, setClicked}) => {
  const CELL_HEIGHT = 25;
  const HOUR_PER_DAY = 24;
  const divStyle = {
    height: HOUR_PER_DAY * CELL_HEIGHT
  };
  const dayString = (dateObject) => `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
  const weekEventObject = (day) => {
    const result = events.find((e) => e.date === dayString(day)) || {};
    const createdTimeOffsetSpace = new Date(result.createdAt).getHours() * CELL_HEIGHT;
    return {
      ...result,
      cellStyle: {
        paddingTop: createdTimeOffsetSpace || 0
      }
    };
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "weekColumn",
    style: divStyle
  }, weekDisplay.map((day, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    style: weekEventObject(day).cellStyle,
    onClick: () => weekEventObject(day).title && setClicked(dayString(day))
  }, /* @__PURE__ */ React.createElement("span", {
    className: weekEventObject(day).title ? "info" : ""
  }, weekEventObject(day).title))));
};
