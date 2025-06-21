import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import './fontawesome'; 
import App from "./App.jsx";
import Contents from "./Contents.jsx";
import Additems from "./Additems.jsx"; 
import Viewitems from "./Viewitems.jsx"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/Additems" element={<Additems />} />
        <Route path="/Viewitems" element={<Viewitems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
