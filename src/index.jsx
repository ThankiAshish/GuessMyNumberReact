import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Styles/index.css";

import Start from "./Screens/Start";
import Game from "./Screens/Game";

import GitHubIcon from "@mui/icons-material/GitHub";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <a
      href="https://github.com/ThankiAshish"
      target="_blank"
      rel="noreferrer"
      className="fixedLink">
      <GitHubIcon className="icon" />
    </a>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
