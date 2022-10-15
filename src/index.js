import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import AppContextProvider from "./context/app-context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
