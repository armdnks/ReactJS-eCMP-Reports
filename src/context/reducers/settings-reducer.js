import { SET_GRID_VIEW, SET_TABLE_VIEW } from "../constants/settings-constant";

const reducer = (state, action) => {
  if (action.type === SET_GRID_VIEW) {
    return {
      ...state,
      is_grid_view: true,
    };
  }

  if (action.type === SET_TABLE_VIEW) {
    return {
      ...state,
      is_grid_view: false,
    };
  }
};

export default reducer;
