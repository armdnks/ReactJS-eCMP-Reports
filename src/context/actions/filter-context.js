import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/filter-reducer";
import useReportContext from "./report-context";

import { LOAD_REPORTS, FILTER_REPORTS, UPDATE_FILTERS, ON_CHANGE_FILTERS } from "../constants/filter-constant";

const initialState = {
  filter_loading: false,
  filter_error: false,
  filter_error_message: "",
  all_reports: [],
  filtered_reports: [],
  filters: {
    text: "",
    brand: "all",
    molecular_diagnostic: "all",
    clinical_result: "all",
  },
};

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { reports } = useReportContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_REPORTS, payload: { reports } });
  }, [reports]);

  useEffect(() => {
    dispatch({ type: FILTER_REPORTS });
  }, [state.filters]);

  function onChangeFilters(e) {
    const { name, value } = e.target;

    dispatch({ type: ON_CHANGE_FILTERS, payload: { name, value } });
  }

  const value = {
    ...state,
    onChangeFilters,
  };
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export default function useFilterContext() {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilterContext must be used within FilterContext!");
  }

  return context;
}
