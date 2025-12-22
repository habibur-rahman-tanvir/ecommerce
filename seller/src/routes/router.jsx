import { createBrowserRouter } from "react-router";
import Login from "../components/page/Login";
import Signup from "../components/page/signup";
import DashboardLayout from "../layout/DashboardLayout";
import AuthProvider from "../context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <p>
        <a href="/signup">Signup</a>
        <br />
        <a href="/login">Login</a>
        <br />
        <a href="/dashboard">Dashboard</a>
      </p>
    ),
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <AuthProvider>
        <DashboardLayout />
      </AuthProvider>
    ),
  },
]);

export default router;
