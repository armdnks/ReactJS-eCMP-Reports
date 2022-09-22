import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getToken = localStorage.getItem("token");

  async function setupUser({ currentUser, endpoint }) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/auth/${endpoint}`,
        currentUser
      );
      const { token } = data;
      localStorage.setItem("token", token);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }

  const value = { setupUser, isLoading, isError, getToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within AuthContext!");
  }

  return context;
}
