import { createContext, useContext } from "react";
// import axios from "axios";

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const value = "";
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default function useUIContext() {
  const context = useContext(UIContext);

  if (context === undefined) {
    throw new Error("useUIContext must be used within UIContext!");
  }

  return context;
}
