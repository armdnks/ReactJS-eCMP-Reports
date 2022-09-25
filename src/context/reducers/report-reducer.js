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

// import { initialState } from "../actions/report-context";

const reducer = (state, action) => {
  if (action.type === CHANGE_HANDLER) {
    return {
      ...state,
      report: { ...state.report, [action.payload.name]: action.payload.value },
    };
  }

  if (action.type === GET_REPORTS_BEGIN) {
    return {
      ...state,
      report_loading: true,
    };
  }

  if (action.type === GET_REPORTS_SUCCESS) {
    return {
      ...state,
      report_loading: false,
      reports: action.payload.reports,
    };
  }

  if (action.type === GET_REPORTS_ERROR) {
    return {
      ...state,
      report_loading: false,
      report_error: true,
    };
  }

  if (action.type === GET_REPORT_BEGIN) {
    return {
      ...state,
      report_loading: true,
    };
  }

  if (action.type === GET_REPORT_SUCCESS) {
    return {
      ...state,
      report_loading: false,
      report: action.payload.report,
      report_id: action.payload.report_id,
    };
  }

  if (action.type === GET_REPORT_ERROR) {
    return {
      ...state,
      report_loading: false,
      report_error: true,
    };
  }

  if (action.type === CREATE_REPORT_BEGIN) {
    return {
      ...state,
      report_loading: true,
    };
  }

  if (action.type === CREATE_REPORT_SUCCESS) {
    return {
      ...state,
      report_loading: false,
    };
  }

  if (action.type === CREATE_REPORT_ERROR) {
    return {
      ...state,
      report_loading: false,
      report_error: true,
    };
  }

  if (action.type === SET_UPDATE_REPORT) {
    const report = state.reports.find((report) => report.id === action.payload.id);

    return {
      ...state,
      is_editing: true,
      report_id: report.id,
      report,
    };
  }

  if (action.type === UPDATE_REPORT_BEGIN) {
    return {
      ...state,
      report_loading: true,
    };
  }

  if (action.type === UPDATE_REPORT_SUCCESS) {
    return {
      ...state,
      report_loading: false,
    };
  }

  if (action.type === UPDATE_REPORT_ERROR) {
    return {
      ...state,
      report_loading: false,
      report_error: true,
    };
  }

  if (action.type === DELETE_REPORT_BEGIN) {
    return {
      ...state,
      report_loading: true,
    };
  }

  if (action.type === DELETE_REPORT_SUCCESS) {
    return {
      ...state,
      report_loading: false,
    };
  }

  if (action.type === DELETE_REPORT_ERROR) {
    return {
      ...state,
      report_loading: false,
      report_error: true,
    };
  }
};

export default reducer;
