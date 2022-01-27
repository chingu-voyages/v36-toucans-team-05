import React from 'react';
import { ButtonList } from "../ButtonList";

export const CalendarHeader = ({ onNext, onBack, dateDisplay, setDateFormat }) => {
  return(
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <ButtonList setDateFormat={setDateFormat} />
      <div>
        <button onClick={onBack} id="backButton">Back</button>
        <button onClick={onNext} id="nextButton">Next</button>
      </div>
    </div>
  );
};
