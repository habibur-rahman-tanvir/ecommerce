import { RouterProvider } from "react-router/dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
