import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { getItem } from "./Utils/storage";

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem("token");
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
