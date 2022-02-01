import React from "../snowpack/pkg/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import {App} from "./App/index.js";
import {Provider} from "../snowpack/pkg/react-redux.js";
import store from "./store/index.js";
import "./sass/style.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
