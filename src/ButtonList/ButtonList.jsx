import React, { useState } from "react";

export const ButtonList = ({ setDateFormat }) => {
  const [buttonList] = useState(["Day", "Week", "Month", "Year"]);

  return (
    <>
      {buttonList.map((btn) => (
        <div id="buttonList" key={btn}>
          <button onClick={setDateFormat} id={btn.toLowerCase()}>
            {btn}
          </button>
        </div>
      ))}
    </>
  );
};
