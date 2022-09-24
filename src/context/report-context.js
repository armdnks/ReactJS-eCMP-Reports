import { createContext, useContext, useState } from "react";
import useAuthContext from "./auth-context";

const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const { authFetch } = useAuthContext();

  const [reportState, setReportState] = useState([]);
  const [reportData, setReportData] = useState({});

  function changeHandler({ name, value }) {
    setReportData({ ...reportData, [name]: value });
  }

  async function getAllReports() {
    try {
      const { data } = await authFetch(`/reports`);
      const { reports } = data;
      setReportState(reports);
    } catch (error) {
      console.log(error);
    }
  }

  async function createReport(data) {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      await authFetch.post(
        `${process.env.REACT_APP_URL}/api/v1/reports`,
        data,
        config
      );

      setReportData({}); // reset form
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    reportState,
    reportData,
    getAllReports,
    changeHandler,
    createReport,
  };

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
};

export default function useReportContext() {
  const context = useContext(ReportContext);

  if (context === undefined) {
    throw new Error("useReportContext must be used within ReportContext!");
  }

  return context;
}
