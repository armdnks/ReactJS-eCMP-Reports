import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, Landing, NotFound, Register, ProtectedRoute } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />

          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
