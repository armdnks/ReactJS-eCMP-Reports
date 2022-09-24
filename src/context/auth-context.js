import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AuthContext = createContext();

const tokenStorage = localStorage.getItem("token");
const userStorage = localStorage.getItem("user");

export const AuthContextProvider = ({ children }) => {
  const [tokenState, setTokenState] = useState(tokenStorage || null);
  const [userState, setUserState] = useState(JSON.parse(userStorage) || null);

  useEffect(() => {
    const oneDay = 1000 * 60 * 60 * 24; // miliseconds
    if (userState) setTimeout(() => localStorage.clear(), oneDay);
  }, [userState]);

  const authFetch = axios.create({ baseURL: `${process.env.REACT_APP_URL}/api/v1` });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${tokenState}`;
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

  async function setupUser({ currentUser, endpoint }) {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/v1/auth/${endpoint}`, currentUser, config);

      const { token, user } = data;

      addUserToLocalStorage({ token, user });

      setTokenState(token);
      setUserState(user);

      toast.success(`Welcome ${user.name}`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  }

  async function updateUser(currentUser) {
    try {
      const config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      };

      await authFetch.put(`${process.env.REACT_APP_URL}/auth/me`, currentUser, config);

      const { data } = await authFetch.get(`/auth/me`);
      const { token, user } = data;

      addUserToLocalStorage({ token, user });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  }

  async function logoutUser() {
    setTokenState(null);
    setUserState(null);
    removeUserFromLocalStorage();
  }

  const value = {
    authFetch,
    tokenState,
    userState,
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
