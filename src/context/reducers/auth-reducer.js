import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
} from "../constants/auth-constant";

import { initialState } from "../actions/auth-context";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      user_loading: true,
    };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      user_loading: true,
      token: action.payload.token,
      user: action.payload.user,
      user_alert_text: action.payload.user_alert_text,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      user_loading: false,
      user_error: true,
      user_alert_text: action.payload.user_alert_text,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
};

export default reducer;
