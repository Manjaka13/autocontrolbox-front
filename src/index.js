import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App.js";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

ReactDOM.render(<App />, document.getElementById("root"));
