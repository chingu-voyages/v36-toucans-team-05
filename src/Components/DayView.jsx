import React from "react";

export const DayView = ({events, dayDisplay, setClicked}) => {
  let arr = [];
  let currentDayEvent = [];
  const activeIndex = (idx, ce) => {
    return ce ? new Date(ce[0]?.createdAt).getHours() === idx : '';
  }

  for (let i = 0; i < 24; i++) {
    arr.push(i + ":00");
  }

  if (dayDisplay) {
    const dayString = (dateObject) => `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
    const currentDay = dayString(dayDisplay);
    currentDayEvent = events.filter(event => event.date === currentDay);
  }

  return (
    <div id="dayView">
      {arr.map((item, idx) =>
        (<div className={"dayContainer"} key={idx}><span className={"dayText"}>{item}</span><span
          className={[`dayMsg ${
            currentDayEvent.length !== 0 &&
            activeIndex(idx, currentDayEvent) ? 'active' : ''}`]}><span>{
          activeIndex(idx, currentDayEvent) && currentDayEvent[0]?.title}</span></span>
        </div>))}
    </div>
  );
}