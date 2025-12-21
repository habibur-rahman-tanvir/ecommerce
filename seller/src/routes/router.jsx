import { createBrowserRouter } from "react-router";
import Login from "../components/page/Login";
import Signup from "../components/page/Signup";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Root</p>,
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
    element: <RootLayout />,
  },
]);

export default router;
