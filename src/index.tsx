import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
  redirect,
} from "react-router-dom";
import Home from "Home";
import Header from "componets/Header";
import Skills from "pages/Skills";
// Bootstrap CSS


import "bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Experience from "pages/Experience";

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={
        <>
          <Header /> <h1>Not Found</h1>
        </>
      }
      element={
        <>
          <Header /> <Outlet />
        </>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
