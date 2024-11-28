import { HomeFr, HomeEn } from "./Pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFr />,
  },
  {
    path: "/en",
    element: <HomeEn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
