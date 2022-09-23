import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// ### Local Storage
const tokenStorage = localStorage.getItem("token");
const userStorage = localStorage.getItem("user");

export const AuthContextProvider = ({ children }) => {
  // ### useState
  const [tokenState, setTokenState] = useState(JSON.parse(tokenStorage) || "");
  const [userState, setUserState] = useState(JSON.parse(userStorage) || null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ### useEffect
  useEffect(() => {
    const oneDay = 1000 * 60 * 60 * 24; // miliseconds
    if (userState) setTimeout(() => localStorage.clear(), oneDay);
  }, [userState]);

  /**
   *  ### Setup User
   *
   *  @param {Object} currentUser
   *  @param {String} endpoint
   *
   */

  async function setupUser({ currentUser, endpoint }) {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/auth/${endpoint}`,
        currentUser,
        config
      );

      const { token, user } = data;

      const setupUserStorage = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      };

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(setupUserStorage));

      setTokenState(token);
      setUserState(user);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);

      console.log(error);
    }
  }

  const value = {
    userState,
    tokenState,
    isLoading,
    isError,
    setupUser,
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
