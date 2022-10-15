/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";

import useAuthContext from "./auth-context";
import reducer from "../reducers/report-reducer";

import {
  CHANGE_HANDLER,
  IS_SIDE_EFFECTS,
  RESET_INPUT_FIELDS,
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

/**
 * ### REPORT - INITIAL STATE
 * @desc Holds every report initial state value
 *
 */
export const initialState = {
  report_loading: false,
  report_error: false,
  report_alert_text: "",
  // reports data
  reports: [],
  total_reports: 0,
  report: {
    id: "", // from database
    brand: "",
    patient_first_name: "",
    patient_last_name: "",
    patient_gender: "male",
    patient_age: "",
    therapy_start_date: "",
    therapy_end_date: "",
    indication_common: "onco panel",
    indication_other: "",
    total_dosing_per_cycle: "",
    clinical_result: "cr",
    s_effects_mild: "no",
    s_effects_mild_desc: "",
    s_effects_moderate: "no",
    s_effects_moderate_desc: "",
    s_effects_severe: "no",
    s_effects_severe_desc: "",
    md_name: "",
    md_email: "",
    md_clinic: "",
    md_phone: "",
  },
  report_id: "",
  is_editing: false,
  // brand data options
  brand_options: [
    "carnitor",
    "ofloxacin",
    "levaquin",
    "aspirin",
    "paracetamol",
    "cellcept",
    "reducer",
  ],
  // patient data options
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
};

const ReportContext = createContext();

export const ReportContextProvider = ({ children }) => {
  const { authFetch, logoutUser } = useAuthContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * ### CHANGE HANDLER
   * @desc change value depend on name attribute
   *
   * @components  ...
   *
   */
  function changeHandler({ name, value }) {
    dispatch({
      type: CHANGE_HANDLER,
      payload: { name, value },
    });
  }

  /**
   * ### IS SIDE EFFECTS
   * @desc result "yes" | "no"
   *
   * @components  ...
   *
   */
  function isSideEffects({ key }) {
    dispatch({
      type: IS_SIDE_EFFECTS,
      payload: { key },
    });
  }

  /**
   * ### RESET INPUT FIELDS
   * @desc reset input fields back to initial state value
   *
   */
  function resetInputFields() {
    dispatch({ type: RESET_INPUT_FIELDS });
  }

  /**
   * ### GET ALL REPORTS
   *
   */
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
      logoutUser();
      console.log(error);
    }
  }

  /**
   * ### GET SINGLE REPORT
   *
   */
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
      logoutUser();
      console.log(error);
    }
  }

  /**
   * ### CREATE REPORT
   *
   */
  async function createReport() {
    dispatch({ type: CREATE_REPORT_BEGIN });
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { report } = state;

      await authFetch.post(
        `${process.env.REACT_APP_URL}/api/v1/reports`,
        report,
        config
      );

      dispatch({ type: CREATE_REPORT_SUCCESS });

      resetInputFields();
    } catch (error) {
      console.log(error);
      dispatch({ type: CREATE_REPORT_ERROR });
    }
  }

  /**
   * ### SET UPDATE REPORT
   *
   */
  function setUpdateReport(id) {
    dispatch({ type: SET_UPDATE_REPORT, payload: { id } });
  }

  /**
   * ### UPDATE REPORT
   *
   */
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

      resetInputFields();
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_REPORT_ERROR });
    }
  }

  /**
   * ### DELETE REPORT
   *
   */
  async function deleteReport(id) {
    dispatch({ type: DELETE_REPORT_BEGIN });

    try {
      await authFetch.delete(`/reports/${id}`);

      getAllReports();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    ...state,
    changeHandler,
    isSideEffects,
    getAllReports,
    getReport,
    createReport,
    setUpdateReport,
    updateReport,
    deleteReport,
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
