import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/filter-reducer";
import useReportContext from "./report-context";

import {
  LOAD_REPORTS,
  FILTER_REPORTS,
  ON_CHANGE_FILTERS,
  CLEAR_FILTERS,
  SHOW_FILTERS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
} from "../constants/filter-constant";

export const initialState = {
  showFilters: false,
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

  // view setup
  grid_view: false,
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

  function setGridView() {
    dispatch({ type: SET_GRID_VIEW });
  }

  function setListView() {
    dispatch({ type: SET_LIST_VIEW });
  }

  function toggleFilters() {
    dispatch({ type: SHOW_FILTERS });
    if (state.showFilters) clearFilters();
  }

  function onChangeFilters(e) {
    let { name, value } = e.target;

    dispatch({ type: ON_CHANGE_FILTERS, payload: { name, value } });
  }

  function clearFilters() {
    dispatch({ type: CLEAR_FILTERS });
  }

  const value = {
    ...state,
    toggleFilters,
    onChangeFilters,
    clearFilters,
    setGridView,
    setListView,
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
