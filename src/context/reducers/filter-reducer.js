import { LOAD_REPORTS, FILTER_REPORTS, ON_CHANGE_FILTERS, CLEAR_FILTERS } from "../constants/filter-constant";

import { initialState } from "../actions/filter-context";

const reducer = (state, action) => {
  if (action.type === LOAD_REPORTS) {
    return {
      ...state,
      all_reports: action.payload.reports,
      filtered_reports: action.payload.reports,
    };
  }

  if (action.type === ON_CHANGE_FILTERS) {
    return {
      ...state,
      filters: { ...state.filters, [action.payload.name]: action.payload.value },
    };
  }

  if (action.type === FILTER_REPORTS) {
    let temporary_reports = [...state.all_reports];

    if (state.filters.text) {
      temporary_reports = temporary_reports.filter(
        (report) =>
          report.brand.toLowerCase().startsWith(state.filters.text) ||
          report.clinical_result.toLowerCase().startsWith(state.filters.text) ||
          report.indication.toLowerCase().startsWith(state.filters.text) ||
          report.molecular_diagnostic_common.toLowerCase().startsWith(state.filters.text) ||
          report.patient_first_name.toLowerCase().startsWith(state.filters.text) ||
          report.patient_last_name.toLowerCase().startsWith(state.filters.text)
      );
    }

    if (state.filters.brand !== "all") {
      temporary_reports = temporary_reports.filter((report) => report.brand === state.filters.brand);
    }

    if (state.filters.molecular_diagnostic !== "all") {
      temporary_reports = temporary_reports.filter(
        (report) => report.molecular_diagnostic_common === state.filters.molecular_diagnostic
      );
    }

    if (state.filters.clinical_result !== "all") {
      temporary_reports = temporary_reports.filter(
        (report) => report.clinical_result === state.filters.clinical_result
      );
    }

    return { ...state, filtered_reports: temporary_reports };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: initialState.filters,
    };
  }
};

export default reducer;
