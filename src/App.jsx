import { HomeFr, HomeEn } from "./Pages";
import Error from "./Pages/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFr />,
    errorElement: <Error />,
  },
  {
    path: "/en",
    element: <HomeEn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
