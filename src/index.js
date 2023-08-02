import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <h1>Weather App</h1>
    <App />
    <h4>
      <a href="https://github.com/SanaJVN/react-app-W04" target="_blank">
        Open-Source Code
      </a>
      , by{" "}
      <a href="mailto:saanaa.jvn@gmail.com" target="_blank">
        Sana Javanshir
      </a>
    </h4>
  </div>
);

reportWebVitals();
