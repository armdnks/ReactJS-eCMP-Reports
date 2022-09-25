import { createContext, useContext, useState } from "react";
import useAuthContext from "./auth-context";

const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const { authFetch } = useAuthContext();

  const [reportsState, setReportsState] = useState([]);
  const [reportState, setReportState] = useState({});
  const [reportData, setReportData] = useState({});
  const [isEditReport, setIsEditReport] = useState(false);

  function onChangeHandler(e) {
    const { name, value } = e.target;
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

  async function createReport(formdata) {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await authFetch.post(
        `${process.env.REACT_APP_URL}/api/v1/reports`,
        formdata,
        config
      );
      const { report } = data;

      setReportState(report);
      setReportData({}); // reset form
    } catch (error) {
      console.log(error);
    }
  }

  function setEditReport() {
    setIsEditReport(true);
  }

  async function updateReport(id, newdata) {
    try {
      const config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await authFetch.put(`/reports/${id}`, newdata, config);
      const { report } = data;

      setReportState(report);

      setReportData({});
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteReport(id) {
    try {
      await authFetch.delete(`/reports/${id}`);

      getAllReports();
    } catch (error) {
      console.log(error);
    }
  }

  function resetForm() {
    setIsEditReport(false);
    setReportData({});
    setReportState({});
  }

  const value = {
    reportsState,
    reportState,
    reportData,
    isEditReport,
    getAllReports,
    getReport,
    onChangeHandler,
    createReport,
    setEditReport,
    updateReport,
    deleteReport,
    resetForm,
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
