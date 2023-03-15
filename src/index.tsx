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
import Header from 'componets/Header';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<><Header /> <h1>Not Found</h1></>}  element={<><Header /> <Outlet /></>}>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<h1>Experience</h1>} />
      <Route path="/contact" element={<h1>Contact Me!</h1>} />
      <Route path="/Interests" element={<h1>My Interests</h1>} />
    </Route>
  )
);


createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
