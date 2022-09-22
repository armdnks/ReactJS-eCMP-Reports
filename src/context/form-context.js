import { createContext, useContext } from "react";
import axios from "axios";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const value = "";
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default function useFormContext() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormContext must be used within FormContext!");
  }

  return context;
}
