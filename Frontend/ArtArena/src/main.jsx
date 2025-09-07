import React from "react"; // <-- add this line
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind/global styles
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
