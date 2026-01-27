import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import DashLayout from "../layouts/DashLayout";
import Appointments from "../pages/Appointments";
import CallLogs from "../pages/CallLogs";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashLayout></DashLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/call-logs",
        element: <CallLogs></CallLogs>,
      },
      {
        path: "/appointments",
        element: <Appointments></Appointments>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);
