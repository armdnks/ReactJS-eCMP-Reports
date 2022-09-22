import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthContextProvider } from "./context/auth-context";
import { FormContextProvider } from "./context/form-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
