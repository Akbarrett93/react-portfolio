import React, { useState } from "react";
import NavTabs from "./Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Renders the current page
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </nav>
  );
}
