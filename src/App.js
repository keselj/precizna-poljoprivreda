// App.js
import "./App.css";
import React from "react";
import Home from "./pages";
import UslugePage from "./pages/UslugePage";
import KurseviPage from "./pages/KurseviPage";
import IndUslugaPage from "./pages/IndUslugaPage";
import IndKursPage from "./pages/IndKursPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnamaPage from "./pages/OnamaPage";
import BlogPage from "./pages/BlogPage";
import ProdajaPage from "./pages/ProdajaPage";

function App() {
  return (
    <Router basename="/precizna-poljoprivreda">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usluge" element={<UslugePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/prodaja" element={<ProdajaPage />} />
        <Route path="/usluga/:id" element={<IndUslugaPage />} />
        <Route path="/kursevi" element={<KurseviPage />} />
        <Route path="/kurs/:id" element={<IndKursPage />} />
        <Route path="/onama" element={<OnamaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
