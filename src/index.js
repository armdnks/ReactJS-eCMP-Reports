import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { AuthContextProvider } from "./context/auth-context";
import { ReportContextProvider } from "./context/report-context";
import { UIContextProvider } from "./context/ui-context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <AuthContextProvider>
      <UIContextProvider>
        <ReportContextProvider>
          <App />
        </ReportContextProvider>
      </UIContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
