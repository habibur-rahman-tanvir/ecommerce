import { createBrowserRouter } from "react-router";
import Login from "../components/page/Login";
import Signup from "../components/page/signup";
import DashboardLayout from "../layout/DashboardLayout";
import AuthProvider from "../context/AuthProvider";
import Home from "../layout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
