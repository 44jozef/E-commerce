import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "./styles/App.css";
import "./styles/carousel.css";
import "./styles/navbar.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Rootes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
