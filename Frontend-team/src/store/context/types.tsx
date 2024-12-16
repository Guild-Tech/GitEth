// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MetricsProvider } from "./MetricsContext";

ReactDOM.render(
  <MetricsProvider>
    <App />
  </MetricsProvider>,
  document.getElementById("root")
);
