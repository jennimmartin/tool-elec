import { HomeFr, HomeUk } from "./Pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFr />,
  },
  {
    path: "/uk",
    element: <HomeUk />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
