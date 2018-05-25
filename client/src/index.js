import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./css/reset.css";
import "./css/base.css";
import "./css/forms.css";
import "./css/home.css";
import "./css/recipe.css";
import "./css/responsive.css";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
