import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { VocabularyPage } from "./vocabulary/VocabularyPage";
import { PracticePage } from "./practice/PracticePage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PracticePage />} />
            <Route path="vocabulary" element={<VocabularyPage />} />
          </Route>
        </Routes>
      </CssBaseline>
    </BrowserRouter>
  </StrictMode>,
);
