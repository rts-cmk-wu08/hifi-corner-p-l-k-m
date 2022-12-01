import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from "./pages/NotFound";
import Shop from './pages/Shop';

import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";


export const router= createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
  <Route index element={<Home />} />
  <Route path="Shop" element={<Shop />} />
  <Route path="/AboutUs" element={<AboutUs />} />
  <Route path="/ContactUs" element={<ContactUs />} />
  <Route path="*" element={<NotFound />} />
 </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

