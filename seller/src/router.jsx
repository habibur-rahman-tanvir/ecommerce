import { createBrowserRouter } from "react-router";
import Login from "./components/page/Login";
import Signup from "./components/page/signup";
import DashboardLayout from "./layout/DashboardLayout";
import AuthProvider from "./context/AuthProvider";
import Home from "./layout/home/Home";
import profileLoader from "./layout/dashboard/dashboard.loader";
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
    loader: profileLoader,
    element: (
      <AuthProvider>
        <DashboardLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <p>Dashboard Home</p>,
      },
      {
        path: "product",
        element: <p>Product</p>,
      },
      {
        path: "favorite",
        element: <p>Favorite</p>,
      },
    ],
  },
]);

export default router;
