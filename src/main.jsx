import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import MainLayouts from "./layouts/MainLayouts";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <MainLayouts />
    <ToastContainer position="top-center" />
  </StrictMode>
);
