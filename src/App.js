import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Landing, NotFound, ProtectedRoute } from "./pages";
import { AllReports, AddReport, Home, Settings, ReportDetail, SharedLayout } from "./pages/user";

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
            {/* <Route path="/add-report" element={<AddReport />} /> */}
            <Route path="/report" element={<ReportDetail />} />
            <Route path="/report/:id" element={<ReportDetail />} />
            <Route path="/report/edit/:id" element={<AddReport />} />
            <Route path="/all-reports" element={<AllReports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="/landing" element={<Landing />} />

          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
