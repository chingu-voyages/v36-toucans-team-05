import React from "../../snowpack/pkg/react.js";
import {WEEKDAYS} from "../utils/constant.js";
import {nanoid} from "../../snowpack/pkg/nanoid.js";
import {VIEW_FORMAT} from "../Config/enum.js";
export const Weeks = ({view, weekDisplay}) => {
  const getDisplayWeekDay = (idx) => {
    return weekDisplay[idx]?.getDate() || "";
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "weekdays"
  }, WEEKDAYS.map((weekday, index) => /* @__PURE__ */ React.createElement("div", {
    key: nanoid()
  }, weekday, " ", view === VIEW_FORMAT.Week ? getDisplayWeekDay(index) : "")));
};
