import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavTabs from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavTabs />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
