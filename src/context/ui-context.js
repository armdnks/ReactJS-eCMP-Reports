import { createContext, useContext, useState } from "react";
// import axios from "axios";

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function displayAlert() {
    setIsShowAlert(true);
    clearAlert();
  }

  function clearAlert() {
    setTimeout(() => {
      setIsShowAlert(false);
    }, 4000);
  }

  const value = {
    isShowAlert,
    isDarkMode,
    displayAlert,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default function useUIContext() {
  const context = useContext(UIContext);

  if (context === undefined) {
    throw new Error("useUIContext must be used within UIContext!");
  }

  return context;
}
