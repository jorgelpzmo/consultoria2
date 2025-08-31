import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/styles.css";
import AppRouter from "./components/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
