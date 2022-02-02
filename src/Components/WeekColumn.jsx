import React from "react";

export const WeekColumn = ({events, weekDisplay, setClicked}) => {
  const CELL_HEIGHT = 25;
  const HOUR_PER_DAY = 24;

  const divStyle = {
    height: HOUR_PER_DAY * CELL_HEIGHT,
  };

  const dayString = (dateObject) => `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;

  const weekEventObject = (day) => {
    const result = events.find((e) => e.date === dayString(day)) || {};
    const createdTimeOffsetSpace = new Date(result.createdAt).getHours() * CELL_HEIGHT;
    return {
      ...result,
      cellStyle: {
        paddingTop: createdTimeOffsetSpace || 0,
      },
    };
  }

  return (
    <div id="weekColumn" style={divStyle}>
      {weekDisplay.map((day, index) => <div key={index}
                                            style={weekEventObject(day).cellStyle}
                                            onClick={() => weekEventObject(day).title && setClicked(dayString(day))}
      ><span className={weekEventObject(day).title ? "info" : ''}>{weekEventObject(day).title}</span></div>)}
    </div>
  );
};
