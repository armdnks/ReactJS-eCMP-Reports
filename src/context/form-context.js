import { createContext, useContext, useState } from "react";
import axios from "axios";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  // ### useState
  const [formData, setFormData] = useState({});

  /**
   *  ### HandleChange
   *
   *  @param {String} name
   *  @param {String} value
   *
   */

  function contextHandleChange({ name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  /**
   *  ### Create Report
   *
   */

  async function contextCreateReport() {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      await axios.post(
        `${process.env.REACT_APP_URL}/reports`,
        formData,
        config
      );

      setFormData({}); // reset form
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    formData,
    contextHandleChange,
    contextCreateReport,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default function useFormContext() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormContext must be used within FormContext!");
  }

  return context;
}
