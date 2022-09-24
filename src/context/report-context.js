import { createContext, useContext, useState } from "react";
import useAuthContext from "./auth-context";

const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const { authFetch } = useAuthContext();

  const [reportsState, setReportsState] = useState([]);
  const [reportState, setReportState] = useState({});
  const [reportData, setReportData] = useState({});

  function changeHandler({ name, value }) {
    setReportData({ ...reportData, [name]: value });
  }

  async function getAllReports() {
    try {
      const { data } = await authFetch(`/reports`);
      const { reports } = data;
      setReportsState(reports);
    } catch (error) {
      console.log(error);
    }
  }

  async function getReport(id) {
    try {
      const { data } = await authFetch(`/reports/${id}`);
      const { report } = data;
      setReportState(report);
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
    reportsState,
    reportState,
    reportData,
    getAllReports,
    getReport,
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
