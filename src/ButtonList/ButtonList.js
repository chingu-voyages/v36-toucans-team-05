import React, {useState} from "../../snowpack/pkg/react.js";
import {DATE_FORMAT} from "../utils/constant.js";
import {useDispatch, useSelector} from "../../snowpack/pkg/react-redux.js";
import {setView} from "../store/view/viewSlice.js";
export const ButtonList = () => {
  const [buttonList] = useState(DATE_FORMAT);
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view.value);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, buttonList.map((btn) => /* @__PURE__ */ React.createElement("div", {
    id: "buttonList",
    key: btn
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(setView(btn)),
    className: btn === view ? "active" : ""
  }, btn))));
};
