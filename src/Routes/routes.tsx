import App from "@/App";
import CreateSupply from "@/Dashboard/CreateSupply";
import SupplyDetails from "@/Dashboard/SupplyDetail";
import Comment from "@/Dashboard/comment";
import LeaderBoard from "@/components/LeaderBoard";
import SupplyCard from "@/components/suppplyCard/SupplyCard";
import Dashboard from "@/layout/Dashboard";

import Login from "@/pages/login";
import Register from "@/pages/register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Register />,
  },
  {
    path: "/community",
    element: <Comment />,
  },
  {
    path: "/leaderBoard",
    element: <LeaderBoard />,
  },
  {
    path: "/supplies",
    element: <SupplyCard />,
  },
  {
    path: "/supplies/:id",
    element: <SupplyDetails />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "create-testimonial",
        element: <CreateSupply />,
      },
    ],
  },
]);
export default router;
