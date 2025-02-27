import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import Card from "../pages/Cards/Card";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Card", element: <Card /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
