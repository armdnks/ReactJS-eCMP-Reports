import { createContext, useContext, useState, useReducer } from "react";
import {} from "../constants/ui-constant";

import reducer from "../reducers/ui-reducer";

export const initialState = {
  dark_mode: false,
};

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
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

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default function useUIContext() {
  const context = useContext(UIContext);

  if (context === undefined) {
    throw new Error("useUIContext must be used within UIContext!");
  }

  return context;
}
