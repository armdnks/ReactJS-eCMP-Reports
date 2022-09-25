import { createContext, useContext, useState, useReducer } from "react";

import useAuthContext from "./auth-context";
import reducer from "../reducers/report-reducer";

import {
  CHANGE_HANDLER,
  GET_REPORTS_BEGIN,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_ERROR,
  GET_REPORT_BEGIN,
  GET_REPORT_SUCCESS,
  GET_REPORT_ERROR,
  CREATE_REPORT_BEGIN,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_ERROR,
  SET_UPDATE_REPORT,
  UPDATE_REPORT_BEGIN,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_ERROR,
  DELETE_REPORT_BEGIN,
  DELETE_REPORT_SUCCESS,
  DELETE_REPORT_ERROR,
} from "../constants/report-constant";

export const initialState = {
  report_loading: false,
  report_error: false,
  report_alert_text: "",
  // reports data
  reports: [],
  total_reports: 0,
  report: {},
  report_id: "",
  is_editing: false,
  // brand data
  brand_options: [
    "carnitor",
    "ofloxacin",
    "levaquin",
    "aspirin",
    "paracetamol",
    "cellcept",
    "reducer",
  ],
  // patient data
  patient_gender_options: ["male", "female"],
  indication_common_options: [
    "onco panel",
    "onco lung",
    "onco crc",
    "brca 1/2",
    "pd-l1",
    "other",
  ],
  clinical_result_options: ["cr", "pr", "sd", "pd"],
  s_effects_mild_grade: "",
  s_effects_mild_desc: "",
  s_effects_moderate_grade: "",
  s_effects_moderate_desc: "",
  s_effects_severe_grade: "",
  s_effects_severe_desc: "",
};

const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const { authFetch, logoutUser } = useAuthContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  function changeHandler({ name, value }) {
    dispatch({
      type: CHANGE_HANDLER,
      payload: { name, value },
    });
  }

  async function getAllReports() {
    let url = `/reports`;

    dispatch({ type: GET_REPORTS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { reports } = data;

      dispatch({
        type: GET_REPORTS_SUCCESS,
        payload: { reports },
      });
    } catch (error) {
      // logoutUser();
      console.log(error);
    }
  }

  async function getReport(id) {
    dispatch({ type: GET_REPORT_BEGIN });
    try {
      const { data } = await authFetch(`/reports/${id}`);
      const { report } = data;

      dispatch({
        type: GET_REPORT_SUCCESS,
        payload: { report, report_id: id },
      });
    } catch (error) {
      // logoutUser();
      console.log(error);
    }
  }

  async function createReport() {
    dispatch({ type: CREATE_REPORT_BEGIN });
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { report } = state;

      await authFetch.post(`${process.env.REACT_APP_URL}/api/v1/reports`, report, config);

      dispatch({ type: CREATE_REPORT_SUCCESS });
    } catch (error) {
      // console.log(error);
      dispatch({ type: CREATE_REPORT_ERROR });
    }
  }

  function setUpdateReport(id) {
    dispatch({ type: SET_UPDATE_REPORT, payload: { id } });
  }

  async function updateReport() {
    dispatch({ type: UPDATE_REPORT_BEGIN });

    try {
      const config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      };

      const { report } = state;
      await authFetch.put(`/reports/${state.report_id}`, report, config);

      dispatch({ type: UPDATE_REPORT_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_REPORT_ERROR });
    }
  }

  async function deleteReport(id) {
    dispatch({ type: DELETE_REPORT_BEGIN });

    try {
      await authFetch.delete(`/reports/${id}`);

      getAllReports();
    } catch (error) {
      console.log(error);
    }
  }

  function resetForm() {
    localStorage.removeItem("report");
  }

  const value = {
    ...state,
    getAllReports,
    getReport,
    changeHandler,
    createReport,
    setUpdateReport,
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
