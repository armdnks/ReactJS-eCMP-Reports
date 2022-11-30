import { createContext, useContext, useReducer } from "react";
import { SET_GRID_VIEW, SET_TABLE_VIEW } from "../constants/settings-constant";

import reducer from "../reducers/settings-reducer";

export const initialState = {
  is_grid_view: false,
};

const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState);

  function setGridView() {
    dispatch({ type: SET_GRID_VIEW });
  }

  function setTableView() {
    dispatch({ type: SET_TABLE_VIEW });
  }

  const value = {
    ...state,
    setGridView,
    setTableView,
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
