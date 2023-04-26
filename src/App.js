import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavTabs from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="page-container">
      <div id="header">
        <NavTabs />
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
