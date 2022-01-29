import React from "react";
import {WEEKDAYS} from "../utils/constant";
import {nanoid} from "nanoid";
import {VIEW_FORMAT} from "../config/enum";

export const Weeks = ({activeDateModel}) => {
  return (
    <div id="weekdays">
      {WEEKDAYS.map((weekday) => (
        <div key={nanoid()}>{weekday} {activeDateModel === VIEW_FORMAT.Week ? 30 : ""}</div>
      ))}
    </div>
  );
};
