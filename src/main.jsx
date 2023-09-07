import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router.jsx";
import store from "../src/redux/store/store.js";
import "./assets/styles/reset.scss";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
