import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./app/App";

const rootElId = "app";
const domElement = document.getElementById(rootElId);
if (domElement) {
  ReactDOM.render(<App />, domElement);
}
