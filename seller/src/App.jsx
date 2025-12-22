import { RouterProvider } from "react-router/dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";
import Snowfall from "react-snowfall";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Snowfall />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
