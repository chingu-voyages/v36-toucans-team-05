import React from "react";
import {ButtonList} from "../ButtonList";

export const CalendarHeader = ({
                                 onNext,
                                 onBack,
                                 dateDisplay,
                                 setDateFormat,
                                 activeDateModel,
                               }) => {
  return (
    <div id="header">
      <div id="dateFormatDisplay">
        <ButtonList setDateFormat={setDateFormat} activeDateModel={activeDateModel}/>
      </div>

      <div id="subheader">
        <div id="monthDisplay">{dateDisplay}</div>
        <div>
          <button onClick={onBack} id="backButton">
            Back
          </button>
          <button onClick={onNext} id="nextButton">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
