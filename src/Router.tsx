import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FlightInfoPage from "./pages/flightinfo/flightinfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "example",
  //   element: <Flightinfo />,
  // },
  // {
  //   path: "packing",
  //   element: <PackingList />,
  // },
  {
    path: "flights",
    element: <FlightInfoPage />,
  },
  // {
  //   path: "sightseeing",
  //   element: <Sightseeing />,
      // },
]);
