import { HomeFr, HomeEn, Contact, ContactEn } from "./Pages";

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
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/contact/en",
    element: <ContactEn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
