import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import reducer from "../reducers/auth-reducer";

import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER,
} from "../constants/auth-constant";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const initialState = {
  user_loading: false,
  user_error: false,
  user_alert_text: "",
  user: user ? JSON.parse(user) : null,
  token: token,
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const oneDay = 1000 * 60 * 60 * 24; // miliseconds
    if (user) setTimeout(() => localStorage.clear(), oneDay);
  }, []);

  const authFetch = axios.create({
    baseURL: `${process.env.REACT_APP_URL}/api/v1`,
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  function addUserToLocalStorage({ token, user }) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function removeUserFromLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  async function setupUser({ currentUser, endpoint, userAlertText }) {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/api/v1/auth/${endpoint}`,
        currentUser,
        config
      );

      const { token, user } = data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, user_alert_text: userAlertText },
      });

      addUserToLocalStorage({ token, user });

      toast.success(userAlertText);
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { error: error.response.data.error },
      });
    }
  }

  async function updateUser(currentUser) {
    dispatch({ type: UPDATE_USER_BEGIN });

    try {
      const config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      };

      await authFetch.put(`/auth/me`, currentUser, config);

      const { data } = await authFetch.get(`/auth/me`);
      const { token, user } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { token, user },
      });

      addUserToLocalStorage({ token, user });
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { error: error.response.data.error },
      });
    }
  }

  async function logoutUser() {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  }

  const value = {
    ...state,
    authFetch,
    setupUser,
    updateUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within AuthContext!");
  }

  return context;
}
