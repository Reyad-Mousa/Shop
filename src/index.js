import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Details from "./pages/Details";
import AddCard from "./pages/AddCard";
import ErrorPage from "./pages/ErrorPage";
import CardListAdmin from "./components/CardListAdmin";
import AdminRootLayout from "./pages/AdminRootLayout";
import AdminIndex from "./pages/AdminIndex";
import EditCard from "./pages/EditCard";
import store from "./store/Index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  // users paths
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "products", element: <Index /> },
      {
        path: "product/add",
        element: <AddCard />,
      },
      {
        path: "product/details/:id",
        element: <Details />,
      },
    ],
  },
  // admin paths
  {
    path: "/admin/",
    element: <AdminRootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminIndex /> },

      {
        path: "/admin/add-products",
        element: <AddCard />,
      },
      {
        path: "/admin/",
        element: <CardListAdmin />,
      },
      {
        path: "add/product/:id",
        element: <AddCard />,
      },
      {
        path: "edit/product/:id",
        element: <EditCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
