import React, {useState} from "react";
import {DATE_FORMAT} from "../utils/constant";
import {useDispatch, useSelector} from "react-redux";
import {setView} from '@/store/view/viewSlice';

export const ButtonList = () => {
  const [buttonList] = useState(DATE_FORMAT);
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view.value);

  return (
    <>
      {buttonList.map((btn) => (
        <div id="buttonList" key={btn}>
          <button
            onClick={() => dispatch(setView(btn))}
            className={btn === view ? "active" : ""}
          >
            {btn}
          </button>
        </div>
      ))}
    </>
  );
};
