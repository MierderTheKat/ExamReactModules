import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Nav/Navbar";
import FormView from "./routes/FormView";
import TableView from "./routes/TableView";
import ErrorView from "./routes/ErrorView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Se crean las rutas a las que se podra acceder
const router = createBrowserRouter([
  {
    path: "/",
    element: <FormView />,
    errorElement: <ErrorView/>
  },
  {
    path: "/table",
    element: <TableView />,
  },
  {
    path: "/form",
    element: <FormView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container-sm px-2">
      <Navbar />
      <RouterProvider router={router}/>
    </main>
  </React.StrictMode>
);
