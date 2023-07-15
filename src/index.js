import React from "react";
import { createRoot } from "react-dom/client";
import "./lib/components/Modal.js";
import "./lib/components/modal.css";
import App from "./lib/example/App.js";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
