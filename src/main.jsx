import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Nav/Navbar";
import RoutesProject from "./routes/RoutesProject";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container-sm px-2">
      <Router>
        <Navbar />
        <RoutesProject />
      </Router>
    </main>
  </React.StrictMode>
);
