import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import useAuthContext from "./auth-context";

const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const { authFetch } = useAuthContext();

  // ### useState
  const [reportState, setReportState] = useState([]);
  const [formData, setFormData] = useState({});

  function changeHandler({ name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  async function getAllReports() {
    let url = `/reports`;

    try {
      const { data } = await authFetch(url);
      const { reports } = data;
      setReportState(reports);
    } catch (error) {
      // console.log(error);
    }
  }

  async function createReport() {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      await axios.post(`${process.env.REACT_APP_URL}/reports`, formData, config);

      setFormData({}); // reset form
    } catch (error) {
      // console.log(error);
    }
  }

  const value = {
    reportState,
    formData,
    getAllReports,
    changeHandler,
    createReport,
  };

  return <ReportContext.Provider value={value}>{children}</ReportContext.Provider>;
};

export default function useReportContext() {
  const context = useContext(ReportContext);

  if (context === undefined) {
    throw new Error("useReportContext must be used within ReportContext!");
  }

  return context;
}
