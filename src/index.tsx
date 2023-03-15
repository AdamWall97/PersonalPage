import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
  redirect,
} from "react-router-dom";
import Home from 'Home';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<><h1>Header</h1>  <h1>Not Found</h1></>}  element={<div><h1>Header</h1> <Outlet /></div>}>
      <Route path="/" element={<Home />} />
      <Route path="/expierence" element={<h1>Experience</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/Music" element={<h1>Music</h1>} />
    </Route>
  )
);


createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
