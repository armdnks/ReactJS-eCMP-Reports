import { createContext, useContext, useState, useReducer } from "react";
import {} from "../constants/settings-constant";

import reducer from "../reducers/settings-reducer";

export const initialState = {
  dark_mode: false,
};

const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isShowAlert, setIsShowAlert] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
    ...state,
    isShowAlert,
    isDarkMode,
    displayAlert,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export default function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error("useSettingsContext must be used within SettingsContext!");
  }

  return context;
}
