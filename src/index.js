import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";

const anyName = "Pascal";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Joann" />
    <NameTag name="Susan" />
    <NameTag name="Frank" />
    <NameTag name={anyName} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
