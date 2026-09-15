import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/layouts/dashboard-layout";

import Dashboard from "@/pages/dashboard";
import Products from "@/pages/products";
import Inventory from "@/pages/inventory";
import Sales from "@/pages/sales";
import Settings from "@/pages/settings";
import NotFound from "@/pages/not-found";
import Expenses from "@/features/expenses";

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
