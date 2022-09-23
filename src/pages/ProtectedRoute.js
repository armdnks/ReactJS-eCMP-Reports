import { Navigate } from "react-router-dom";
import useAuthContext from "../context/auth-context";

const ProtectedRoute = ({ children }) => {
  const { userState } = useAuthContext();
  if (!userState) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
