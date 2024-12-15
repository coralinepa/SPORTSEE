import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, Profile, NotFound } from "./pages";
import ComingSoon from "./components/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <ComingSoon />,
      },
      {
        path: "/community",
        element: <ComingSoon />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
