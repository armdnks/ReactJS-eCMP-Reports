import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Landing, NotFound, Register, ProtectedRoute } from "./pages";
import {
  SharedLayout,
  Home,
  AllReports,
  AddReport,
  Profile,
} from "./pages/dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="/all-reports" element={<AllReports />} />
            <Route path="/add-report" element={<AddReport />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

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
