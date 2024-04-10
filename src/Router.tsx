import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PackingList from "./pages/PackingList/PackingList";
import Flights from "./pages/Flights/Flights";
import Sightseeing from "./pages/Sightseeing/Sightseeing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "packing",
    element: <PackingList />,
  },
  {
    path: "flights",
    element: <Flights />,
  },
  {
    path: "sightseeing",
    element: <Sightseeing />,
  },
]);
