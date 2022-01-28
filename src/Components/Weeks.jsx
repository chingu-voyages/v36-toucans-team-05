import React from "react";
import { WEEKDAYS } from "../utils/constant";
import { VIEW_FORMAT } from "../config/enum";
import { nanoid } from "nanoid";

export const Weeks = ({ activeDateFormat }) => {
  if (activeDateFormat !== VIEW_FORMAT.Day) {
    return <></>;
  }

  return (
    <div id="weekdays">
      {WEEKDAYS.map((weekday) => (
        <div key={nanoid()}>{weekday}</div>
      ))}
    </div>
  );
};
