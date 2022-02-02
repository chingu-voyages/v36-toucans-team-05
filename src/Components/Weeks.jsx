import React from "react";
import {WEEKDAYS} from "@/utils/constant";
import {nanoid} from "nanoid";
import {VIEW_FORMAT} from "@/Config/enum";

export const Weeks = ({view, weekDisplay}) => {
  const getDisplayWeekDay = (idx) => {
    return weekDisplay[idx]?.getDate() || "";
  };

  return (
    <div id="weekdays">
      {WEEKDAYS.map((weekday, index) => (
        <div key={nanoid()}>{weekday} {view === VIEW_FORMAT.Week ? getDisplayWeekDay(index) : ""}</div>
      ))}
    </div>
  );
};
