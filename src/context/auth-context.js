import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// ### Local Storage
const tokenStorage = localStorage.getItem("token");
const userStorage = localStorage.getItem("user");

export const AuthContextProvider = ({ children }) => {
  // ### useState
  const [tokenState, setTokenState] = useState(tokenStorage || "");
  const [userState, setUserState] = useState(JSON.parse(userStorage) || null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ### useEffect
  useEffect(() => {
    const oneDay = 1000 * 60 * 60 * 24; // miliseconds
    if (userState) setTimeout(() => localStorage.clear(), oneDay);
  }, [userState]);

  // ### axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // ### request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${tokenState}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // ### response
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

  /**
   *  ### Setup User
   *
   *  @param {Object} currentUser
   *  @param {String} endpoint login or register
   *
   */

  async function setupUser({ currentUser, endpoint }) {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `/api/v1/auth/${endpoint}`,
        currentUser,
        config
      );

      const { token, user } = data;

      addUserToLocalStorage({ token, user });

      setTokenState(token);
      setUserState(user);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);

      console.log(error);
    }
  }

  /**
   *  ### Update User
   *
   *  @param {Object} currentUser
   */

  async function updateUser(currentUser) {
    try {
      const config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      };

      await authFetch.put(`/auth/me`, currentUser, config);

      const { data } = await authFetch.get(`/auth/me`);
      const { token, user } = data;

      addUserToLocalStorage({ token, user });
    } catch (error) {
      console.log(error);
    }
  }

  async function logoutUser() {}

  const value = {
    authFetch,
    userState,
    tokenState,
    isLoading,
    isError,
    setupUser,
    updateUser,
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
