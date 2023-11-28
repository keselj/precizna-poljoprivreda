// App.js
import "./App.css";
import React from "react";
import Home from "./pages";
import UslugePage from "./pages/UslugePage";
import KurseviPage from "./pages/KurseviPage";
import IndKursPage from "./pages/IndKursPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnamaPage from "./pages/OnamaPage";

function App() {
  return (
    <Router basename="/precizna-poljoprivreda-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usluge" element={<UslugePage />} />
        <Route path="/kursevi" element={<KurseviPage />} />
        <Route path="/indkurs" element={<IndKursPage />} />
        <Route path="/kurs/:id" element={<KurseviPage />} />
        <Route path="/onama" element={<OnamaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
