import React, {useState} from "react";
import {DATE_FORMAT} from "../utils/constant";

export const ButtonList = ({setDateFormat, activeDateModel}) => {
  const [buttonList] = useState(DATE_FORMAT);

  return (
    <>
      {buttonList.map((btn) => (
        <div id="buttonList" key={btn}>
          <button
            onClick={() => setDateFormat(btn)}
            className={btn === activeDateModel ? "active" : ""}
          >
            {btn}
          </button>
        </div>
      ))}
    </>
  );
};
