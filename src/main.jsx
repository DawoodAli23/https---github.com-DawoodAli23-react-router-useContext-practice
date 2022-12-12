import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SnackbarContextProvider from "./context/Snackbar.context";
import Aboutus from "./pages/Aboutus.page";
import Contactus from "./pages/Contactus.page";
import ErrorPage from "./pages/Error.page";
import Homepage from "./pages/Home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarContextProvider>
    <RouterProvider router={router} />
  </SnackbarContextProvider>
);
