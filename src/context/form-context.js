import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import useAuthContext from "./auth-context";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const { authFetch } = useAuthContext();

  // ### useState
  const [reportState, setReportState] = useState([]);
  const [formData, setFormData] = useState({});

  function changeHandler({ name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    getAllReports();
    // eslint-disable-next-line
  }, []);

  async function getAllReports() {
    let url = `/reports`;

    try {
      const { data } = await authFetch(url);
      const { reports } = data;
      setReportState(reports);
    } catch (error) {
      console.log(error);
    }
  }

  async function createReport() {
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
    reportState,
    formData,
    getAllReports,
    changeHandler,
    createReport,
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
