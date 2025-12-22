import { createBrowserRouter } from "react-router";
import Login from "../components/page/Login";
import Signup from "../components/page/Signup";
import DashboardLayout from "../layout/DashboardLayout";

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
    element: <DashboardLayout />,
  },
]);

export default router;
