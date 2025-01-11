import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "@/routes/protected-route";
import PrivateRoute from "@/routes/private-route";

import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
// import Dashboard from "@/pages/dashboard";
// import Notfound from "@/pages/not-found";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        {/* <Route index element={<Dashboard />} /> */}
      </Route>
      <Route>
        {/* <Route path="/404" element={<Notfound />} /> */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default Index;
